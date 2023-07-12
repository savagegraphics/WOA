import React from 'react';
import './LPage.css';

const LPage = () => {
  return (
    <div className="main">
    <ul className="cards custom-grid-cols-2 ">
      <li className="cards_item">
        <div className="card" tabIndex={0}>
          <div className="card_image"><img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar. "/></div>
          <div className="card_content">
            <h2 className="card_title">Farmstand Salad &#x2022; $9</h2>
            <div className="card_text">
              <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer&apos;s market.</p>
            </div>
          </div>
        </div>
      </li>
  
      <li className="cards_item">
        <div className="card" tabIndex={1}>
          <div className="card_image"><img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper. "/></div>
          <div className="card_content">
            <h2 className="card_title">Ultimate Reuben &#x2022; $18</h2>
            <div className="card_text">
              <p>All great meals take time, but this one takes it to the next level! More than 650 hours of fermenting, brining, aging, and curing goes into each and every one of our legendary Reuben sandwiches.
              </p>
             </div>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card" tabIndex={2}>
          <div className="card_image"><img src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" alt="A side view of a plate of figs and berries. "/></div>
          <div className="card_content">
            <div className="card_text">
              <span className="note">Seasonal.</span>
              <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert.</p>
            </div>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card" tabIndex={2}>
          <div className="card_image"><img src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" alt="A side view of a plate of figs and berries. "/></div>
          <div className="card_content">
            <div className="card_text">
              <span className="note">Seasonal.</span>
              <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert.</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  );
};

export default LPage;
