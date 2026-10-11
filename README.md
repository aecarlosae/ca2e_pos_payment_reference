# POS Payment Reference

**POS Payment Reference** enhances the Odoo Point of Sale (POS) interface by adding a convenient reference button directly onto non-cash payment lines. This allows cashiers to quickly record transaction numbers, bank transfer references, check numbers, authorization codes, or voucher references via a clean popup modal.

---

## 🚀 Features

- **Per-Line Reference Action Button**: Displays a dedicated `# Reference` button directly inside each non-cash payment line on the POS payment screen.
- **Smart Non-Cash Filtering**: Intelligently hides on cash payment methods (`!is_cash_count`), keeping cash sales clean and fast.
- **Native Owl Dialog**: Opens a responsive `TextInputPopup` modal using Odoo 19's asynchronous `makeAwaitable` architecture.
- **Visual State Indicator**: Turns green (`btn-success`) and displays the reference number once assigned, or displays an outline button (`btn-outline-secondary`) when pending.
- **Multi-Tender Support**: Assign independent reference numbers for split payments or multiple non-cash payment methods on a single order.

---

## 📖 Usage

1. Open or resume a **Point of Sale** session.
2. Add products to the cart and proceed to the **Payment Screen**.
3. Select any non-cash payment method (e.g., *Bank*, *Card*, *Customer Account*, *Check*).
4. Click the **# Reference** button on the payment line.
5. Enter the transaction ID, authorization number, or check code in the popup dialog and click **Confirm**.
6. Validate the order once payment is finalized.

---

## 🛠️ Technical Details

- **Technical Name**: `ca2e_pos_payment_reference`
- **Category**: Sales/Point of Sale
- **Version**: `19.0.1.0.0`
- **License**: AGPL-3
- **Dependencies**: `point_of_sale`
- **Odoo Version**: `19.0`

---

## 👤 Author & Maintainer

- **Author**: Carlos Espinoza
- **License**: AGPL-3 (http://www.gnu.org/licenses/agpl)
