import React from 'react'

import { Helmet } from 'react-helmet'

import './deposits-and-withdrawals.css'

const DepositsAndWithdrawals = (props) => {
  return (
    <div className="deposits-and-withdrawals-container">
      <Helmet>
        <title>deposits-and-withdrawals - Miniature Spherical Gorilla</title>
        <meta
          property="og:title"
          content="deposits-and-withdrawals - Miniature Spherical Gorilla"
        />
      </Helmet>
      <a
        href="https://chatblock.ai/init"
        className="deposits-and-withdrawals-link"
      >
        <img
          alt="image"
          src="/playground_assets/simple-home-with-pixel-art-style_475147-414%20%5B1%5D-modified-300w.png"
          className="deposits-and-withdrawals-image"
        />
      </a>
      <div className="deposits-and-withdrawals-container1">
        <div className="deposits-and-withdrawals-container2">
          <button
            id="deposit"
            name="deposit"
            type="button"
            className="deposits-and-withdrawals-button button"
          >
            DEPOSIT
          </button>
          <button
            id="withdraw"
            name="withdraw"
            type="button"
            className="deposits-and-withdrawals-button1 button"
          >
            WITHDRAW
          </button>
        </div>
        <div className="deposits-and-withdrawals-container3">
          <img
            id="BNB1"
            alt="bnb"
            src="/playground_assets/image%20%5B41%5D-200h.png"
            className="deposits-and-withdrawals-image1"
          />
          <img
            id="BUSD1"
            alt="image"
            src="/playground_assets/image%20%5B40%5D-200h.png"
            className="deposits-and-withdrawals-image2"
          />
          <img
            id="USDT1"
            alt="image"
            src="/playground_assets/image%20%5B38%5D-200h.png"
            className="deposits-and-withdrawals-image3"
          />
          <input
            type="number"
            id="amount"
            min="0.01"
            name="amount"
            step="0.1"
            placeholder="0.0"
            autoComplete="0.0"
            className="deposits-and-withdrawals-textinput input button"
          />
          <div
            data-thq="thq-dropdown"
            className="deposits-and-withdrawals-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="deposits-and-withdrawals-dropdown-toggle"
            >
              <div
                data-thq="thq-dropdown-arrow"
                className="deposits-and-withdrawals-dropdown-arrow"
              ></div>
              <span className="deposits-and-withdrawals-text">&gt;</span>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="deposits-and-withdrawals-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="deposits-and-withdrawals-dropdown teleport-show list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="deposits-and-withdrawals-dropdown-toggle1 button"
                >
                  <button
                    id="BNB"
                    name="BNB"
                    type="button"
                    className="deposits-and-withdrawals-button2 button"
                  >
                    BNB
                  </button>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="deposits-and-withdrawals-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="deposits-and-withdrawals-dropdown-toggle2 button"
                >
                  <button
                    id="BUSD"
                    name="BUSD"
                    type="button"
                    className="deposits-and-withdrawals-button3 button"
                  >
                    BUSD
                  </button>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="deposits-and-withdrawals-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="deposits-and-withdrawals-dropdown-toggle3 button"
                >
                  <button
                    id="USDT"
                    name="USDT"
                    type="button"
                    className="deposits-and-withdrawals-button4 button"
                  >
                    USDT
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button
          id="submit"
          name="Submit"
          type="submit"
          className="deposits-and-withdrawals-button5 button"
        >
          Submit
        </button>
      </div>
      <img
        alt="image"
        src="/playground_assets/layers%20%5B6%5D-200h.png"
        className="deposits-and-withdrawals-image4"
      />
    </div>
  )
}

export default DepositsAndWithdrawals
