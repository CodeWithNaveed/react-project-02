export function Recipe({ dish }) {
    return (
        <div
            style={{
                display: "flex",
                width: "40%",
                backgroundColor: "lightgray",
                border: "2px solid black",
                borderRadius: "10px",
            }}
        >

            <img
                style={{
                    width: "50%",
                }}
                src={dish.img}
                className='slide'
            />

            <div
                style={{
                    width: "50%",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <h1 className='spin'>{dish.title}</h1>
                <p className='spin'>{dish.description}</p>
                <button className='spin'>{dish.stock ?? "out of stock"}</button>
            </div>

        </div>
    );
}