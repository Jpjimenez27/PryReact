const Main = () => {
    return (
        <div className="bg-black text-white p-8 ">

            <header>
                <h1 className="text-3xl font-bold text-center mb-4">Bienvenido al Gimnasio</h1>
            </header>

            <div className="bg-black text-white p-8 bg-transparent shadow-lg rounded-md p-4 align-items-center flex flex-col justify-center items-center border border-width-2 border-red-500 border-radius-5">
                    <h2 className="text-3xl font-bold mb-2">Horario</h2>
                    <p>Lunes a Domingos: 5:00 AM - 9:00 PM</p>
                    <br></br>
                    <br></br>
                    <img
                        src="https://www.cmdsport.com/app/uploads/2022/09/gimnasio-penetracion.jpg"
                        alt="Imagen de gimnasio"
                        className="w-75 h-auto"
                    />
            </div>

            <section className="text-lg text-center mb-6  ">
                <p>
                    En nuestro gimnasio, creemos que todos merecen tener un estilo de vida saludable y activo. Por eso, ofrecemos una variedad de clases y
                    equipos para que todos puedan encontrar lo que necesitan para alcanzar sus metas de fitness.Tenemos clases para todos los niveles, desde
                    principiantes hasta expertos. Ofrecemos clases de yoga, pilates, zumba, cardio y mucho más. También tenemos una amplia variedad de equipos
                    de última generación para que puedas entrenar de forma segura y eficaz.Nuestro equipo de profesionales está dedicado a ayudarte a alcanzar
                    tus objetivos. Te guiaremos a través de tu entrenamiento y te ayudaremos a crear un plan que se adapte a tus necesidades.
                </p>
            </section>

            <section className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-2">¿Por qué elegir nuestro gimnasio?</h2>
                <ul className="list-disc list-inside">
                    <li>Clases para todos los niveles</li>
                    <li>Equipos de última generación</li>
                    <li>Profesionales experimentados</li>
                    <li>Precios asequibles</li>
                </ul>
                <br></br>
                <h2 className="text-2xl font-bold mb-2">¡Ven a visitarnos hoy mismo y empieza tu camino hacia un estilo de vida más saludable!</h2>
            </section>

        </div>
    );
}

export default Main;