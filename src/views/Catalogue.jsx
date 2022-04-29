import React from "react";
import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/bricks.svg";
import iconfile from '../data/iconfile.png'
import windycatalogue from '../data/windycatalogue.pdf'
import Recomment from './Recomment'

const Catalogue = () => {
    return (
        <div className="container my-3">
            <div className="row g-3">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header" style={{ fontWeight: 'bold' }}>
                            <IconEnvelopeFill className="i-va" /> Catalogue
                        </div>
                        <div className="card-body">
                            <>
                                <div style={{ textAlign: "center" }}>&nbsp;</div>
                                <div style={{ textAlign: "center" }}>
                                    <span style={{ fontSize: 24 }}>
                                        <strong>
                                            <span style={{ color: "#ff0000" }}>
                                                <span style={{ fontFamily: "Times New Roman,Times,serif" }}>
                                                    CATALOGUE
                                                </span>
                                            </span>
                                        </strong>
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <table
                                        cellPadding={0}
                                        cellSpacing={0}
                                        className="table table-bordered table-striped"
                                        style={{ width: "100%" }}
                                    >
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a
                                                        href={windycatalogue}
                                                        onclick="window.open(this.href, '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no'); return false;"
                                                    >
                                                        <strong>
                                                            <span style={{ color: "#008000" }}>
                                                                01 - Windy Catalogue 2018
                                                            </span>
                                                        </strong>
                                                    </a>
                                                </td>
                                                <td style={{ textAlign: "center" }}>
                                                    <a
                                                        href={windycatalogue}
                                                        onclick="window.open(this.href, '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no'); return false;"
                                                    >
                                                        <img
                                                            alt=""
                                                            src={iconfile}
                                                            style={{ height: 25, width: 25 }}
                                                        />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span style={{ color: "#008000" }}>02 -&nbsp;</span>
                                                    </strong>
                                                </td>
                                                <td style={{ textAlign: "center" }}>
                                                    <img
                                                        alt=""
                                                        src={iconfile}
                                                        style={{ height: 25, width: 25 }}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span style={{ color: "#008000" }}>03 -&nbsp;</span>
                                                    </strong>
                                                </td>
                                                <td style={{ textAlign: "center" }}>
                                                    <img
                                                        alt=""
                                                        src={iconfile}
                                                        style={{ height: 25, width: 25 }}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Recomment />
                </div>
            </div>
        </div>
    );
}

export default Catalogue;
