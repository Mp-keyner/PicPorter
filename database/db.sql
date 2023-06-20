 --productsdb--
    CREATE DATABASE image;

    use image ;

    --products--
    CREATE TABLE images( 
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(400) NOT NULL,
        Url TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    );

    describe image;

    
    -- INSERT INTO images (name, description, Url) VALUES ('imagen 9', 'una pequeña descripcion de una imagen de bicicleta', 'https://images.pexels.com/photos/16231150/pexels-photo-16231150/free-photo-of-alcohol-beber-vaso-musica.jpeg');
    
    -- INSERT INTO images (name, description, Url) VALUES ('imagen 10', 'una pequeña descripcion de una imagen de bicicleta', 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

    -- INSERT INTO images (name, description, Url) VALUES ('imagen 11', 'una pequeña descripcion de una imagen de tecnologia', 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

    -- INSERT INTO images (name, description, Url) VALUES ('imagen 11', 'una pequeña descripcion de una imagen de tecnologia', 'https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');


    