const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heroes');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  const extention = image.slice(
    (Math.max(0, image.lastIndexOf('.')) || Infinity) + 1,
  );
  // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image
          .split('.')
          .slice(0, -1)
          .join('.')}-large.${extention}`,
      ),
    );

  // mengubah ukuran gambar dengan lebar 480px, dengan prefix -nedium.jpg
  sharp(`${target}/${image}`)
    .resize(460)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image
          .split('.')
          .slice(0, -1)
          .join('.')}-medium.${extention}`,
      ),
    );

  // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
  sharp(`${target}/${image}`)
    .resize(360)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image
          .split('.')
          .slice(0, -1)
          .join('.')}-small.${extention}`,
      ),
    );
});
