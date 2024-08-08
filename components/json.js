export const json = {
    "locale": "cs",
    "logoFit": "none",
    "logoPosition": "right",
    "pages": [
        {
            "name": "Solar or insulation plan",
            "elements": [
                {
                    "type": "boolean",
                    "name": "solarOrInsulationPlan",
                    "title": "Plánujete instalaci fotovoltaiky nebo zateplení střechy či stropu foukanou nebo stříkanou izolací na vaší nemovitosti, kterým jste vlastníkem?",
                    "isRequired": true,
                    "labelTrue": {
                        "default": "YES",
                        "cs": "ANO"
                    },
                    "labelFalse": {
                        "default": "NO",
                        "cs": "NE"
                    }
                }
            ]
        },
        {
            "name": "Conditions",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "conditions",
                    "title": {
                        "cs": "Splňujete alespoň jednu z následujících podmínek?"
                    },
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Jsem v důchodu",
                            "text": {
                                "cs": "Jsem v důchodu"
                            }
                        },
                        {
                            "value": "Pobírám invalidní důchod 3. stupně",
                            "text": {
                                "cs": "Pobírám invalidní důchod 3. stupně"
                            }
                        },
                        {
                            "value": "Probírám příspěvek na bydlení",
                            "text": {
                                "cs": "Probírám příspěvek na bydlení"
                            }
                        },
                        {
                            "value": "Pobírám příspěvek na dítě",
                            "text": {
                                "cs": "Pobírám příspěvek na dítě"
                            }
                        },
                        {
                            "value": "Nesplňuji ani 1 z podmínek",
                            "text": {
                                "cs": "Nesplňuji ani 1 z podmínek"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "Living in house or flat",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "houseOrFlat",
                    "title": {
                        "cs": "Bydlíte v rodinném domě či bytě?"
                    },
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Rodinný dům",
                            "text": {
                                "cs": "Rodinný dům"
                            }
                        },
                        {
                            "value": "Byt",
                            "text": {
                                "cs": "Byt"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "Are you owner of the property?",
            "elements": [
                {
                    "type": "boolean",
                    "name": "ownerOfProperty",
                    "title": {
                        "cs": "Jste vlastníkem rodinného domu?"
                    },
                    "isRequired": true,
                    "labelTrue": {
                        "cs": "ANO"
                    },
                    "labelFalse": {
                        "cs": "NE"
                    }
                }
            ]
        },
        {
            "name": "Permanent Residence",
            "elements": [
                {
                    "type": "boolean",
                    "name": "permanentResidence",
                    "title": "Máte u této nemovitosti trvalé bydliště?",
                    "isRequired": true,
                    "labelTrue": {
                        "default": "YES",
                        "cs": "ANO"
                    },
                    "labelFalse": {
                        "default": "NO",
                        "cs": "NE"
                    }
                }
            ]
        },
        {
            "name": "More than 2 properties",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "moreThan2Properties",
                    "title": "Jste v důchodu a jste majitelem nebo spolumajitelem 2 a více nemovitostí určené k obývání?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "ANO",
                            "text": {
                                "cs": "ANO"
                            }
                        },
                        {
                            "value": "NE",
                            "text": {
                                "cs": "NE"
                            }
                        },
                        {
                            "value": "Nejsem v důchodu",
                            "text": {
                                "cs": "Nejsem v důchodu"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "Other People",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "otherPeople",
                    "title": {
                        "cs": "Pokud ve domě nebydlíte sami, splňují všechny ostatní osoby alespoň jednu z podmínek?"
                    },
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Bydlím sám",
                            "text": {
                                "cs": "Bydlím sám"
                            }
                        },
                        {
                            "value": "Všechny osoby, které se mnou bydlí, splňují alespoň jednu z podmínek",
                            "text": {
                                "cs": "Všechny osoby, které se mnou bydlí, splňují alespoň jednu z podmínek"
                            }
                        },
                        {
                            "value": "Spolubydlící nesplňují ani 1 z podmínek",
                            "text": {
                                "cs": "Spolubydlící nesplňují ani 1 z podmínek"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "Contact Information",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "contactInformation",
                    "title": {
                        "cs": "Kontaktní údaje"
                    },
                    "isRequired": true,
                    "items": [
                        {
                            "name": "fullname",
                            "isRequired": true,
                            "title": {
                                "cs": "Jméno a příjmení"
                            }
                        },
                        {
                            "name": "email",
                            "isRequired": true,
                            "inputType": "email",
                            "title": {
                                "cs": "Email"
                            }
                        },
                        {
                            "name": "phone",
                            "isRequired": true,
                            "inputType": "tel",
                            "title": {
                                "cs": "Telefon"
                            }
                        },
                        {
                            "name": "province",
                            "isRequired": true,
                            "title": {
                                "cs": "Okres"
                            }
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "gdpr",
                    "title": {
                        "cs": "Zaškrtnutím políčka souhlasíte se zpracováním osobních údajů."
                    },
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Souhlasím",
                            "text": {
                                "cs": "Souhlasím"
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "showTitle": false,
    "showPageTitles": false,
    "showCompletedPage": false,
    "showProgressBar": "belowheader",
    "progressBarInheritWidthFrom": "survey",
    "pagePrevText": {
        "cs": "Předchozí"
    },
    "pageNextText": {
        "default": "Next",
        "cs": "Další"
    },
    "completeText": {
        "default": "Complete",
        "cs": "Dokončit"
    },
    "questionsOnPageMode": "questionPerPage",
    "widthMode": "static"
}