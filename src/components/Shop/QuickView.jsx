import React from 'react';

const QuickView = ({product}) => {
    const { id, name, short_description, description, price, sale_price, brand, category, rating, discount, stock_count } = product;

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button> */}
            <dialog id={id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-primary focus-visible:-inset-0">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default QuickView;