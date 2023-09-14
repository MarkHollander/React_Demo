import React, { Component } from "react"

class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <table id='memberTbl' className="table table-bordered table-hover col-md-12">
                            <tbody>
                                <tr className="row">
                                    <td colSpan={2} className="col-md-12"><h2><b>Member Information</b></h2></td>

                                </tr>
                                <tr className="row form-group">
                                    <td className="col-md-3"><label >Name</label></td>
                                    <td className="col-md-9"><input type="text" id="nameTxt" className="form-control"></input></td>
                                </tr>
                                <tr className="row">
                                    <td className="col-md-3"><label >Company</label></td>
                                    <td className="col-md-9"><input type="text" id="companyTxt" className="form-control"></input></td>
                                </tr>
                                <tr className="row">
                                    <td className="col-md-3"><label >Address</label></td>
                                    <td className="col-md-9"><input type="text" id="addressTxt" className="form-control"></input></td>
                                </tr>
                                <tr className="row">
                                    <td className="col-md-3"><label >Country</label></td>
                                    <td className="col-md-9">
                                        <select name="country" id="countrySelect" className="form-control">
                                            <option value="1">VietNam</option>
                                            <option value="2">Other</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className="row">
                                    <td className="col-md-3"><label >Membership Type</label></td>
                                    <td className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <input type="radio" id="individual" name="fav_language" value="individual" />
                                                <label htmlFor="individual">Individual</label>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="radio" id="business" name="fav_language" value="business" />
                                                <label htmlFor="business">Business</label>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="radio" id="organization" name="fav_language" value="organization" />
                                                <label htmlFor="organization">Organization</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="row">
                                    <td className="col-md-3"><label >Post Info By</label></td>
                                    <td className="col-md-9">
                                    <div className="row">
                                            <div className="col-md-6">
                                                <input type="checkbox" id="emailChk" name="emailChk" value="email" />
                                                <label htmlFor="emailChk">Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="checkbox" id="postChk" name="postChk" value="post" />
                                                <label htmlFor="postChk">Post</label>
                                            </div>
                                            
                                        </div>
                                    </td>
                                </tr>
                                <tr className="row">
                                    <td className="col-md-3"><label >Enter a password</label></td>
                                    <td className="col-md-9"><input type="password" id="passwordTxt" className="form-control"></input></td>
                                </tr>
                                <tr className="row">
                                    <td className="col-md-3"><label >Retype password</label></td>
                                    <td className="col-md-9"><input type="password" id="repasswordTxt" className="form-control"></input></td>
                                </tr>
                                <tr className="row">
                                    <td className="col-md-3"><label >Email Address</label></td>
                                    <td className="col-md-9"><input type="text" id="emailTxt" className="form-control"></input></td>
                                </tr>
                                <tr className="row">
                                    <td className="col-md-3"><label >Want Newsletter?</label></td>
                                    <td className="col-md-9">
                                    <div className="row">
                                            <div className="col-md-6">
                                                <input type="radio" id="yesRadio" name="yesRadio" value="1" />
                                                <label htmlFor="yesRadio">Yes</label>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="radio" id="noRadio" name="noRadio" value="0" />
                                                <label htmlFor="noRadio">No</label>
                                            </div>                                            
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div >
            </div >)
    }
}

export default Welcome
