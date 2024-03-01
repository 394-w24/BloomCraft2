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
    className="btn btn-outline-dark btn-lg m-1 p-2"
    htmlFor={bouquetSize}
    style={{ width: "150px", textAlign: "center" }}
    data-cy={bouquetSize}
    >
    {bouquetSize}
    </label>
</div>
);

const BouquetSizeSelector = ({ bouquetSizeSelection, setBouquetSize }) => (
<div className="d-flex btn-group justify-content-center align-items-center m-2">
    {Object.keys(bouquetSizes).map((bouquetSize) => (
    <BouquetSizeButton
        key={bouquetSize}
        bouquetSize={bouquetSize}
        bouquetSizeSelection={bouquetSizeSelection}
        setBouquetSize={setBouquetSize}
    />
    ))}
</div>
);

export default BouquetSizeSelector;