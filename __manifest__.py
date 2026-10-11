{
    'name': 'POS Payment Reference',
    'version': '19.0.1.0.0',
    'category': 'Sales/Point of Sale',
    'summary': 'Add an inline payment reference input on the POS payment screen.',
    "license": "AGPL-3",
    "author": "Carlos Espinoza",
    'depends': ['point_of_sale'],
    'data': [],
    'assets': {
        'point_of_sale._assets_pos': [
            'ca2e_pos_payment_reference/static/src/app/payment_screen/payment_lines/payment_lines.js',
            'ca2e_pos_payment_reference/static/src/app/payment_screen/payment_lines/payment_lines.xml',
        ],
    },
    'installable': True,
    'license': 'AGPL-3',
}