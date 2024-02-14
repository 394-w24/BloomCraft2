const FlowerShop = ({flowerList}) => {
    return (
        <div>
        {flowerList.map((flower, index) => {
            return <div key={index}>{flower}</div>
        })}
        </div>
    )
}

export default FlowerShop;