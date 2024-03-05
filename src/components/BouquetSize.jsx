import './BouquetSize.css';

// could use some tidying up, but it works
const bouquetSizes = {
    Small: "small",
    Medium: "medium",
    Large: "large",
};

const BouquetSizeButton = ({ bouquetSize, bouquetSizeSelection, setBouquetSize }) => (
    <div className="BouquetSizeButton">
        <input
            type="radio"
            id={bouquetSize}
            className="btn-check"
            checked={bouquetSize === bouquetSizeSelection}
            autoComplete="off"
            onChange={() => setBouquetSize(bouquetSize)}
        />
        <label
            className={bouquetSize === bouquetSizeSelection ? "bouquet-size-button btn btn-outline-dark btn-lg m-1 p-2"
                : "btn btn-outline-dark btn-lg m-1 p-2"}
            htmlFor={bouquetSize}
            style={{ width: "70px", textAlign: "center", borderRadius: "25px" }}
            data-cy={bouquetSize}
        >
            {bouquetSize === "Small" ? "S" : bouquetSize === "Medium" ? "M" : "L"}
        </label>
    </div>
);

const BouquetSizeSelector = ({ bouquetSizeSelection, setBouquetSize }) => (
    <div>
        <div className="d-flex btn-group justify-content-center align-items-center">
            {Object.keys(bouquetSizes).map((bouquetSize) => (
                <BouquetSizeButton
                    key={bouquetSize}
                    bouquetSize={bouquetSize}
                    bouquetSizeSelection={bouquetSizeSelection}
                    setBouquetSize={setBouquetSize}
                />
            ))}
        </div>
        <p className="text-center">
            <i>
                You have selected a <b>{bouquetSizeSelection === "Small" ? "small" :
                    bouquetSizeSelection === "Medium" ? "medium" :
                        "large"}</b> bouquet which will include <b>{
                            bouquetSizeSelection === "Small" ? "6" :
                                bouquetSizeSelection === "Medium" ? "12" : "18"}</b> flowers.
            </i>
        </p>
    </div>
);

export default BouquetSizeSelector;