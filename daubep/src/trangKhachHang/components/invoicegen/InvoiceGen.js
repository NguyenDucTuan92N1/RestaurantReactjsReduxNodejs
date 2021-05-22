import React, { Component } from 'react';

class InvoiceGen extends Component {
    render() {
        return (
          <div>
            <div style={{ marginTop:"200px"}}>
            
            </div>
            <div  >
                <div id="page-wrap">
  <textarea style={{height:"30px"}} id="header" defaultValue={"INVOICE"} />
  <div id="identity">
    <textarea id="address" defaultValue={"Chris Coyier\n123 Appleseed Street\nAppleville, WI 53719\n\nPhone: (555) 555-5555"} />
    <div id="logo">
      <div id="logoctr">
        <a href="javascript:;" id="change-logo" title="Change logo">Change Logo</a>
        <a href="javascript:;" id="save-logo" title="Save changes">Save</a>
        |
        <a href="javascript:;" id="delete-logo" title="Delete logo">Delete Logo</a>
        <a href="javascript:;" id="cancel-logo" title="Cancel changes">Cancel</a>
      </div>
      <div id="logohelp">
        <input id="imageloc" type="text" size={50} defaultValue /><br />
        (max width: 540px, max height: 100px)
      </div>
      <img id="image" src="images/logo.png" alt="logo" />
    </div>
  </div>
  <div style={{clear: 'both'}} />
  <div id="customer">
    <textarea id="customer-title" defaultValue={"Widget Corp.\nc/o Steve Widget"} />
    <table id="meta">
      <tbody><tr>
          <td className="meta-head">Invoice #</td>
          <td><textarea defaultValue={"000123"} /></td>
        </tr>
        <tr>
          <td className="meta-head">Date</td>
          <td><textarea id="date" defaultValue={"December 15, 2009"} /></td>
        </tr>
        <tr>
          <td className="meta-head">Amount Due</td>
          <td><div className="due">$875.00</div></td>
        </tr>
      </tbody></table>
  </div>
  <table id="items">
    <tbody><tr>
        <th>Item</th>
        <th>Description</th>
        <th>Unit Cost</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      <tr className="item-row">
        <td className="item-name"><div className="delete-wpr"><textarea defaultValue={"Web Updates"} /><a className="delete" href="javascript:;" title="Remove row">X</a></div></td>
        <td className="description"><textarea defaultValue={"Monthly web updates for http://widgetcorp.com (Nov. 1 - Nov. 30, 2009)"} /></td>
        <td><textarea className="cost" defaultValue={"$650.00"} /></td>
        <td><textarea className="qty" defaultValue={"1"} /></td>
        <td><span className="price">$650.00</span></td>
      </tr>
      <tr className="item-row">
        <td className="item-name"><div className="delete-wpr"><textarea defaultValue={"SSL Renewals"} /><a className="delete" href="javascript:;" title="Remove row">X</a></div></td>
        <td className="description"><textarea defaultValue={"Yearly renewals of SSL certificates on main domain and several subdomains"} /></td>
        <td><textarea className="cost" defaultValue={"$75.00"} /></td>
        <td><textarea className="qty" defaultValue={"3"} /></td>
        <td><span className="price">$225.00</span></td>
      </tr>
      <tr id="hiderow">
        <td colSpan={5}><a id="addrow" href="javascript:;" title="Add a row">Add a row</a></td>
      </tr>
      <tr>
        <td colSpan={2} className="blank"> </td>
        <td colSpan={2} className="total-line">Subtotal</td>
        <td className="total-value"><div id="subtotal">$875.00</div></td>
      </tr>
      <tr>
        <td colSpan={2} className="blank"> </td>
        <td colSpan={2} className="total-line">Total</td>
        <td className="total-value"><div id="total">$875.00</div></td>
      </tr>
      <tr>
        <td colSpan={2} className="blank"> </td>
        <td colSpan={2} className="total-line">Amount Paid</td>
        <td className="total-value"><textarea id="paid" defaultValue={"$0.00"} /></td>
      </tr>
      <tr>
        <td colSpan={2} className="blank"> </td>
        <td colSpan={2} className="total-line balance">Balance Due</td>
        <td className="total-value balance"><div className="due">$875.00</div></td>
      </tr>
    </tbody></table>
  <div id="terms">
    <h5>Terms</h5>
    <textarea defaultValue={"NET 30 Days. Finance Charge of 1.5% will be made on unpaid balances after 30 days."} />
  </div>
</div>

            </div>
            </div>
        );
    }
}

export default InvoiceGen;