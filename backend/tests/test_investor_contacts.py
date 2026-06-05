"""Backend tests for NutriSnap investor landing API."""
import os
import time
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://nutrisnap-demo.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Root health ---
def test_root_greeting(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert isinstance(data["message"], str)
    assert len(data["message"]) > 0


# --- POST /api/investor-contacts ---
def test_create_investor_contact_success(session):
    payload = {
        "full_name": "TEST Jane Doe",
        "email": "test_jane@fund.vc",
        "organization": "TEST Fund VC",
        "ticket_size": "250k€ – 1M€",
        "message": "We are interested in NutriSnap and would love the deck.",
    }
    r = session.post(f"{API}/investor-contacts", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str)
    assert "created_at" in data
    assert data["full_name"] == payload["full_name"]
    assert data["email"] == payload["email"]
    assert data["organization"] == payload["organization"]
    assert data["ticket_size"] == payload["ticket_size"]
    assert data["message"] == payload["message"]


def test_create_invalid_email(session):
    payload = {
        "full_name": "TEST Bad Email",
        "email": "not-an-email",
        "message": "Valid length message here.",
    }
    r = session.post(f"{API}/investor-contacts", json=payload)
    assert r.status_code == 422


def test_create_missing_required_fields(session):
    # missing full_name, email, message
    r = session.post(f"{API}/investor-contacts", json={"organization": "TEST org"})
    assert r.status_code == 422
    body = r.json()
    assert "detail" in body


def test_create_message_too_short(session):
    payload = {
        "full_name": "TEST Short Msg",
        "email": "short@fund.vc",
        "message": "hi",  # < 10 chars
    }
    r = session.post(f"{API}/investor-contacts", json=payload)
    assert r.status_code == 422


# --- GET /api/investor-contacts ---
def test_list_investor_contacts_sorted_desc(session):
    # Create two with a small gap
    p1 = {
        "full_name": "TEST First",
        "email": "test_first@fund.vc",
        "message": "First persisted message for sort check.",
    }
    p2 = {
        "full_name": "TEST Second",
        "email": "test_second@fund.vc",
        "message": "Second persisted message for sort check.",
    }
    r1 = session.post(f"{API}/investor-contacts", json=p1)
    assert r1.status_code == 201
    time.sleep(1.1)
    r2 = session.post(f"{API}/investor-contacts", json=p2)
    assert r2.status_code == 201

    r = session.get(f"{API}/investor-contacts")
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    assert len(items) >= 2

    # verify desc sort by created_at
    timestamps = [it["created_at"] for it in items]
    assert timestamps == sorted(timestamps, reverse=True)

    # ensure our latest TEST entries are present
    emails = [it["email"] for it in items[:20]]
    assert "test_second@fund.vc" in emails
