export const data = [{
    "dttm": "Mar 24 23 11:30",
    "graphs": {
        "AccidentEmergency": {
            "KPI": 3600,
            "Management": {},
            "interval": {
                "barline-1": {
                    "total": [
                        67,
                        6084
                    ],
                    "x": [
                        "12AM - 06AM",
                        "06AM - 08AM",
                        "08AM - 10AM",
                        "10AM - 12PM",
                        "12PM - 02PM",
                        "02PM - 04PM",
                        "04PM - 06PM",
                        "06PM - 08PM",
                        "08PM - 10PM",
                        "10PM - 12AM"
                    ],
                    "y": [
                        {
                            "type": "column",
                            "data": [
                                15,
                                5,
                                7,
                                6,
                                3,
                                2,
                                7,
                                5,
                                10,
                                7
                            ],
                            "name": "Patients"
                        },
                        {
                            "type": "line",
                            "data": [
                                3540,
                                2100,
                                8310,
                                8300,
                                0,
                                0,
                                5760,
                                7020,
                                5310,
                                6450
                            ],
                            "name": "Average Time"
                        }
                    ],
                    "title": "Patients By Interval"
                }
            },
            "triage": {
                "comparison-1": {
                    "total": {
                        "Triage Done": [
                            35,
                            229
                        ],
                        "Triage Not Done": [
                            32,
                            0
                        ]
                    },
                    "x": [
                        "12AM - 06AM",
                        "06AM - 08AM",
                        "08AM - 10AM",
                        "10AM - 12PM",
                        "12PM - 02PM",
                        "02PM - 04PM",
                        "04PM - 06PM",
                        "06PM - 08PM",
                        "08PM - 10PM",
                        "10PM - 12AM"
                    ],
                    "y": [
                        {
                            "type": "column",
                            "data": [
                                8,
                                3,
                                5,
                                4,
                                0,
                                0,
                                3,
                                3,
                                4,
                                5
                            ],
                            "name": "Triage Done"
                        },
                        {
                            "type": "line",
                            "data": [
                                292,
                                360,
                                48,
                                90,
                                0,
                                0,
                                240,
                                20,
                                510,
                                240
                            ],
                            "name": "Triage Done"
                        },
                        {
                            "type": "column",
                            "data": [
                                7,
                                2,
                                2,
                                2,
                                3,
                                2,
                                4,
                                2,
                                6,
                                2
                            ],
                            "name": "Triage Not Done"
                        },
                        {
                            "type": "line",
                            "data": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Triage Not Done"
                        }
                    ],
                    "title": "Triage Time By Interval"
                }
            },
            "Zone": {
                "barpie-1": {
                    "bar": {
                        "x": [
                            "Red Zone",
                            "Yellow Zone",
                            "Green Zone",
                            "Pending"
                        ],
                        "y": [
                            {
                                "type": "column",
                                "data": [
                                    0,
                                    24,
                                    11,
                                    0
                                ],
                                "name": "Total Patients"
                            },
                            {
                                "type": "line",
                                "data": [
                                    0,
                                    7516,
                                    3460,
                                    0
                                ],
                                "name": "Average Time"
                            }
                        ]
                    },
                    "pie": {
                        "x": [
                            "Red Zone",
                            "Yellow Zone",
                            "Green Zone",
                            "Pending"
                        ],
                        "type": "donut",
                        "y": [
                            0,
                            24,
                            11,
                            0
                        ],
                        "time": [
                            0,
                            7516,
                            3460,
                            0
                        ]
                    },
                    "title": "Patients by Zone"
                }
            },
            "Doctor": {
                "barline-1": {
                    "total": [
                        67,
                        1414
                    ],
                    "x": [
                        "Nazima Chaudhary",
                        "Ameen Uddin Mohammed",
                        "Naglaa Mahmoud",
                        "Saeed Choudhry",
                        "Waleed Hussain",
                        "Madiha Samil",
                        "Huma Khan",
                        "Mariam Seleman",
                        "Mohammed Chaudhary",
                        "Swapna Bade"
                    ],
                    "y": [
                        {
                            "type": "column",
                            "data": [
                                10,
                                6,
                                4,
                                4,
                                4,
                                2,
                                1,
                                1,
                                1,
                                1
                            ],
                            "name": "Total Visits"
                        },
                        {
                            "type": "line",
                            "data": [
                                1440,
                                2330,
                                720,
                                615,
                                2145,
                                1110,
                                180,
                                720,
                                1560,
                                1140
                            ],
                            "name": "Average Time"
                        }
                    ],
                    "title": "Consultation by Interval"
                }
            }
        }
    },
    "inprogress": {
        "inprogress": 50,
        "inprogress_tm": 925283,
        "waiting_count": 33,
        "pdTriage": {
            "count": 32,
            "time": 932139
        },
        "pdConsultation": {
            "count": 1,
            "time": 863477
        },
        "pdDischarge": {
            "count": 17,
            "time": 916012
        }
    },
    "completed": {
        "completed": 17,
        "avg_act_tm": 6084,
        "compliance": 52,
        "Time_Based": {
            "Before_Noon": {
                "time": 6540,
                "count": 7
            },
            "After_Noon": {
                "time": 5766,
                "count": 10
            }
        },
        "Payor": {
            "Self_Pay": {
                "time": 0,
                "count": 0
            },
            "Insurance": {
                "time": 6084,
                "count": 17
            }
        },
        "Residency": {
            "International": {
                "time": 0,
                "count": 0
            },
            "Local": {
                "time": 6084,
                "count": 17
            }
        },
        "KPI_BASED": {
            "1h3h": {
                "time": 6426,
                "count": 10
            },
            "3h4h": {
                "time": 12120,
                "count": 1
            },
            "met1h": {
                "time": 2460,
                "count": 5
            },
            "abv4h": {
                "time": 14760,
                "count": 1
            }
        }
    },
    "key_metrics": {
        "total": {
            "count": 67
        },
        "triage_done": {
            "count": 35,
            "time": 229
        },
        "triage_waiting": {
            "count": 32,
            "time": 932140
        },
        "cons_done": {
            "count": 34,
            "time": 1358
        },
        "cons_waiting": {
            "count": 33,
            "time": 863477
        },
        "in_zone": {
            "count": 17,
            "time": 5887
        },
        "ip_transfers": {
            "completed": {
                "count": 1,
                "time": 0
            },
            "inprogress": {
                "count": 0,
                "time": 0
            }
        },
        "treatment": {
            "count": 17,
            "time": 0
        },
        "registration": {
            "count": 1,
            "time": 0
        }
    },
    "zonestats": {
        "red": {
            "total_visits_count": 0,
            "active_count": 0,
            "discharge_count": 0,
            "avg_triage_count": 0,
            "avg_triage_tm": 0,
            "avg_visit_count": 0,
            "avg_visit_tm": 0,
            "avg_cons_count": 0,
            "avg_cons_tm": 0,
            "avg_zone_count": 0,
            "avg_zone_tm": 0
        },
        "yellow": {
            "total_visits_count": 24,
            "active_count": 13,
            "discharge_count": 11,
            "avg_triage_count": 24,
            "avg_triage_tm": 292,
            "avg_visit_count": 11,
            "avg_visit_tm": 7516,
            "avg_cons_count": 24,
            "avg_cons_tm": 1382,
            "avg_zone_count": 11,
            "avg_zone_tm": 7287
        },
        "green": {
            "total_visits_count": 11,
            "active_count": 5,
            "discharge_count": 6,
            "avg_triage_count": 11,
            "avg_triage_tm": 92,
            "avg_visit_count": 6,
            "avg_visit_tm": 3460,
            "avg_cons_count": 10,
            "avg_cons_tm": 1302,
            "avg_zone_count": 6,
            "avg_zone_tm": 3320
        },
        "pending": {
            "total_visits_count": 32,
            "active_count": 32,
            "discharge_count": 0,
            "avg_triage_count": 0,
            "avg_triage_tm": 0,
            "avg_visit_count": 0,
            "avg_visit_tm": 0,
            "avg_cons_count": 0,
            "avg_cons_tm": 0,
            "avg_zone_count": 0,
            "avg_zone_tm": 0
        }
    },
    "docstats": [
        {
            "doc_name": "Nazima Chaudhary",
            "count": 10,
            "avg_visit_tm": 1248
        },
        {
            "doc_name": "Ameen Uddin Mohammed",
            "count": 6,
            "avg_visit_tm": 2330
        },
        {
            "doc_name": "Waleed Hussain",
            "count": 4,
            "avg_visit_tm": 2145
        },
        {
            "doc_name": "Naglaa Mahmoud",
            "count": 4,
            "avg_visit_tm": 720
        },
        {
            "doc_name": "Saeed Choudhry",
            "count": 4,
            "avg_visit_tm": 615
        },
        {
            "doc_name": "Madiha Samil",
            "count": 2,
            "avg_visit_tm": 1110
        },
        {
            "doc_name": "Swapna Bade",
            "count": 1,
            "avg_visit_tm": 1140
        },
        {
            "doc_name": "Mohammed Chaudhary",
            "count": 1,
            "avg_visit_tm": 1560
        },
        {
            "doc_name": "Mariam Seleman",
            "count": 1,
            "avg_visit_tm": 720
        },
        {
            "doc_name": "Huma Khan",
            "count": 1,
            "avg_visit_tm": 180
        }
    ]
}]




export const keyMetrics = {
    "keyMetrics": [
      {
        "title": "Registration Time",
        "label": "Queue to Registration",
        "time": "02:34"
      },
      {
        "title": "Time to Triage",
        "label": "Registration to Triage",
        "time": "00:34"
      },
      {
        "title": "Time to Consult",
        "label": "Triage to Consult",
        "time": "00:34"
      },
      {
        "title": "In Zone Time",
        "label": "Triage End to Discharge",
        "time": "02:34"
      },
      {
        "title": "Treatment Time",
        "label": "Consultation to Discharge",
        "time": "02:34"
      },
      {
        "title": "Lab Processing Time",
        "label": "Lab Order Request to Processing",
        "time": "02:34"
      },
      {
        "title": "Radiology Processing Time",
        "label": "Radiology Order Request to Processing",
        "time": "02:34"
      },
      {
        "title": "IP Transfers",
        "label": "UCC Discharge to IP Bed Allotment",
        "time": "00:34"
      }
    ]
  }
  