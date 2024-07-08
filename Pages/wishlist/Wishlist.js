import "./Wishlist.css";

export const Wishlist = ({ wishlist }) => {
  return (
    <section className="wishlist-container">
      <div className="head">
        <h2 className="carth2">your wishlist items</h2>
      </div>
      <div className="wishlist-items">

        {wishlist.map((item) => (
          <div className="wishlist-box" key={item.id}>
            <div className="wishlist-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="wishlist-info">
              <p className="wishlist-title">{item.title}</p>
            </div>
          </div>
        ))}
        </div>
      
    </section>
  );
};
