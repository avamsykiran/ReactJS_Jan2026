import { Fragment, useState, type SubmitEvent } from "react";
import type { Txn } from "../models/Txn";

const TxnForm = ({ t, save, cancel }: { t?: Txn, save: (txn: Txn) => void, cancel?: (id: number) => void }) => {

    const [txn, setTxn] = useState<Txn>(
        t ? { ...t } :
            { id: 0, header: "", txnDate: (new Date().toISOString().substring(0, 10)), txnType: "CREDIT", amount: 0 }
    )

    const toggleType = (txnType: string) => {
        setTxn({ ...txn, txnType });
    }

    const formSubmitted = (e: SubmitEvent) => {
        e.preventDefault();
        save({ ...txn })
        if (!txn.isEditable) {
            setTxn({ id: 0, header: "", txnDate: (new Date().toISOString().substring(0, 10)), txnType: "CREDIT", amount: 0 });
        }
    }

    return (
        <form className="row p-1 mb-1 border-bottom border-info" onSubmit={formSubmitted}>
            <div className="col-1 text-end">{txn.id}</div>
            <div className="col-2 text-center">
                <input className="form-control" type="date" value={txn.txnDate}
                    onChange={e => setTxn({ ...txn, txnDate: e.target.value })}
                />
            </div>
            <div className="col">
                <input className="form-control" type="text" value={txn.header}
                    onChange={e => setTxn({ ...txn, header: e.target.value })}
                />
            </div>
            <div className="col-2 text-end" onClick={_e => toggleType("CREDIT")}>
                {txn.txnType === "CREDIT" &&
                    <input className="form-control" type="number" value={txn.amount}
                        onChange={e => setTxn({ ...txn, amount: Number(e.target.value) })}
                    />
                }
            </div>
            <div className="col-2 text-end" onClick={_e => toggleType("DEBIT")}>
                {txn.txnType === "DEBIT" &&
                    <input className="form-control" type="number" value={txn.amount}
                        onChange={e => setTxn({ ...txn, amount: Number(e.target.value) })}
                    />
                }
            </div>
            <div className="col-2 text-center">
                {
                    txn.isEditable ? (
                        <Fragment>
                            <button className="btn btn-sm btn-primary">
                                <i className="bi bi-floppy" />
                            </button>
                            <button className="btn btn-sm btn-danger ms-1" type="button"
                                onClick={_e => cancel && cancel(txn.id)} >
                                <i className="bi bi-x-circle" />
                            </button>
                        </Fragment>
                    ) : (
                        <button className="btn btn-sm btn-primary">
                            <i className="bi bi-floppy" />
                        </button>
                    )
                }
            </div>
        </form >
    )
};

export default TxnForm;