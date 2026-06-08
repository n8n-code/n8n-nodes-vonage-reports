import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Get Call Logs",
					"value": "Get Call Logs",
					"action": "Retrieve call logs for your account",
					"description": "Retrieve call logs for your account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"account_id\"]}}/call-logs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /accounts/{account_id}/call-logs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "account_id",
			"required": true,
			"description": "The Vonage Business Cloud account ID",
			"default": 913874,
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "Start Gte",
			"name": "start%3Agte",
			"required": true,
			"description": "Filter records by start date (greater equal or equal to)",
			"default": "2019-01-01 00:00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start:gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "Start Lte",
			"name": "start%3Alte",
			"required": true,
			"description": "Filter records by start date (less equal or equal to)",
			"default": "2019-01-01 00:00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start:lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "End Gte",
			"name": "end%3Agte",
			"description": "Filter records by end date (greater equal or equal to)",
			"default": "2019-01-01 00:00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end:gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "End Lte",
			"name": "end%3Alte",
			"description": "Filter records by end date (less equal or equal to)",
			"default": "2019-01-01 00:00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end:lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"required": true,
			"description": "Number of records per page",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"required": true,
			"description": "Current page number",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "To",
			"name": "to",
			"description": "Filter by called number",
			"default": 17325550100,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "to",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"description": "Filter by source number",
			"default": 17325550100,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "Source User",
			"name": "source_user",
			"description": "Filter by source user",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "source_user",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "Destination User",
			"name": "destination_user",
			"description": "Filter by destination user",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destination_user",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"description": "Filter by call direction.",
			"default": "Inbound",
			"type": "options",
			"options": [
				{
					"name": "Inbound",
					"value": "Inbound"
				},
				{
					"name": "Outbound",
					"value": "Outbound"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Call Logs"
					]
				}
			}
		},
];
