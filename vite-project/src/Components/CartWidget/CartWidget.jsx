const CartWidget = () => {
    return (
        <div>
           <button type="button" className="btn btn-primary position-relative">
           <i class="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    7
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    );
};

export default CartWidget;