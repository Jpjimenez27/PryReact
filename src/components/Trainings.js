import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, doc, deleteDoc, getDocs } from 'firebase/firestore'
import { app } from '../firebase/firebase'

const db = getFirestore(app);

function Trainings() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);

    const handleClick = () => {
        navigate("/register-training");
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'training', id))
    };

    useEffect(() => {
        const getList = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'training'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setList(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getList()
    }, [list]);

    return (
        <div className="bg-black p-4 shadow-md flex justify-center items-center text-white">

            <div>
                <h1 className="text-3xl font-bold text-center mb-4">Lista de entrenamientos</h1>
                <div className="flex flex-col gap-y-4">
                    {list.map(lists => (
                        <div key={lists.id} className="bg-black text-white p-8 bg-transparent shadow-lg rounded-md p-4 align-items-center flex flex-col justify-center items-center border border-width-2 border-red-500 border-radius-5" >
                            <p>Fecha: {lists.date}</p>
                            <p>Hora: {lists.time}</p>
                            <p>Descripción: {lists.description}</p>
                            <button
                                type="submit"
                                onClick={() => handleDelete(lists.id)}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mx-auto"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-black text-white p-8">
                <section className="bg-transparent shadow-lg rounded-md p-4 align-items-center">
                    <img
                        src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Imagen de gimnasio"
                        className="w-75 h-auto"
                    />
                    <br></br>
                    <br></br>
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mx-auto"
                        onClick={handleClick}
                    >Registrar Nuevo Entrenamiento
                    </button>
                </section>
            </div>

        </div>
    );
}

export default Trainings;