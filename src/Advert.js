import { useState } from 'react';
import database from './firebase';

function Advert() {
    const [consultantId, setConsultantId] = useState();
    const [consultantName, setConsultantName] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [image, setImage] = useState();
    const [type, setType] = useState();
    const [difficulty, setDifficulty] = useState(0);
    const [dailyDuration, setDailyDuration] = useState();
    const [totalDuration, setTotalDuration] = useState();
    const [bodyFocus, setBodyFocus] = useState();
    const [trainingType, setTrainingType] = useState();
    const [equipment, setEquipment] = useState();
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(false);

    const fetchProducts = async () => {
        const snapshot = await database.ref("product").once("value");
        const productsData = snapshot.val();
        if (productsData) {
            const productsArray = Object.keys(productsData).map((key) => ({
                id: key,
                consultantId: productsData[key].consultantId,
                consultantName: productsData[key].consultantName,
                title: productsData[key].title,
                price: productsData[key].price,
                rating: productsData[key].rating,
                image: productsData[key].image,
                type: productsData[key].type,
                difficulty: productsData[key].difficulty,
                dailyDuration: productsData[key].dailyDuration,
                totalDuration: productsData[key].totalDuration,
                bodyFocus: productsData[key].bodyFocus,
                trainingType: productsData[key].trainingType,
                equipment:productsData[key].equipment
            }));
            setProducts(productsArray);
            setShowProducts(true);
        }
    };

    const Push = () => {
        const newProductRef = database.ref("product").push();

        newProductRef.set({
            consultantId: consultantId,
            consultantName: consultantName,
            title: title,
            price: price,
            rating: rating,
            image: image,
            type: type,
            difficulty: difficulty,
            dailyDuration: dailyDuration,
            totalDuration: totalDuration,
            bodyFocus: bodyFocus,
            trainingType: trainingType,
            equipment: equipment
        }).catch(alert);
    }

    return (
        <div className="App" style={{ marginTop: 250 }}>
            <center>
                <input placeholder="Enter your consultantId" value={consultantId}
                    onChange={(e) => setConsultantId(e.target.value)} />
                <br /><br />
                <input placeholder="Enter your consultantName" value={consultantName}
                    onChange={(e) => setConsultantName(e.target.value)} />
                <br /><br />
                <input placeholder="Enter your title" value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <br /><br />
                <input type='number' placeholder="Enter your price" value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))} />
                <br /><br />
                <input type='number' min="1" max="5" placeholder="Enter your rating" value={rating}
                    onChange={(e) => setRating(parseInt(e.target.value))} />
                <br /><br />
                <input placeholder="Enter your image link " value={image}
                    onChange={(e) => setImage(e.target.value)} />
                <br /><br />
                <input placeholder="Enter your type" value={type}
                    onChange={(e) => setType(e.target.value)} />
                <br /><br />
                <input type='number' min="1" max="5" placeholder="Enter your difficulty level" value={difficulty}
                    onChange={(e) => setDifficulty(parseInt(e.target.value))} />
                <br /><br />
                <input placeholder="Enter your dailyDuration" value={dailyDuration}
                    onChange={(e) => setDailyDuration(e.target.value)} />
                <br /><br />
                <input placeholder="Enter your totalDuration" value={totalDuration}
                    onChange={(e) => setTotalDuration(e.target.value)} />
                <br /><br />
                <input placeholder="Enter your bodyFocus" value={bodyFocus}
                    onChange={(e) => setBodyFocus(e.target.value)} />
                <br /><br />
                <input placeholder="Enter your trainingType" value={trainingType}
                    onChange={(e) => setTrainingType(e.target.value)} />
                <br /><br />
                <input placeholder="Enter your equipment" value={equipment}
                    onChange={(e) => setEquipment(e.target.value)} />
                <br /><br />
                <button onClick={Push}>PUSH</button>
                <br /><br />
                <button onClick={fetchProducts}>Show Products</button>
                {showProducts && (
                    <>
                        <h2>Products:</h2>
                        {products.map((product) => (
                            <div key={product.id}>
                                <p>consultantId: {product.consultantId}</p>
                                <p>consultantName: {product.consultantName}</p>
                                <p>title: {product.title}</p>
                                <p>price: {product.price}</p>
                                <p>rating: {product.rating}</p>
                                <p>image: {product.image && product.image.url}</p>
                                <p>type: {product.type}</p>
                                <p>difficulty: {product.difficulty}</p>
                                <p>dailyDuration: {product.dailyDuration}</p>
                                <p>--------------------------------</p>
                                <p>totalDuration: {product.totalDuration}</p>
                                <p>bodyFocus: {product.bodyFocus}</p>
                                <p>trainingType: {product.trainingType}</p>
                                <p>equipment: {product.equipment}</p>
                                <hr />
                            </div>
                        ))}
                    </>
                )}
            </center>
        </div>
    );
}

export default Advert;