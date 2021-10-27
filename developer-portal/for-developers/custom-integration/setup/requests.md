# Setup Step 4: Backend Requests

Fast uses a non-standard, polymorphic API. As our product grows and changes, many new features will be added to the API. As such, we have built it in such a way that customer's may opt-in to new features with minimal friction.

| REST VERB | API_URL         | Link                                                                                          |
| --------- | --------------- | --------------------------------------------------------------------------------------------- |
| POST      | /fast/v1/create | [Docs](/developer-portal/for-developers/custom-integration/fast.js/requests/#create-requests) |
| POST      | /fast/v1/read   | [Docs](/developer-portal/for-developers/custom-integration/fast.js/requests/#read-requests)   |
| POST      | /fast/v1/update | [Docs](/developer-portal/for-developers/custom-integration/fast.js/requests/#update-requests) |
| POST      | /fast/v1/delete | [Docs](/developer-portal/for-developers/custom-integration/fast.js/requests/#delete-requests) |
