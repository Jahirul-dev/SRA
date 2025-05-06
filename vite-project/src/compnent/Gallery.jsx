function Profile(){
    return(
        <img 
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Cam View"

        />
        
    );
}

export default function Gallery(){
    return(
        <section>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}
