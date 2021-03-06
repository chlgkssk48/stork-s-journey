import * as PIXI from "pixi.js";

const createBackground = (source, width, height, scale) => {
  const backgroundTexture = PIXI.Texture.from(source);
  const background = new PIXI.TilingSprite(
    backgroundTexture,
    width,
    height,
  );

  background.tileScale.set(scale);

  return background;
};

export default createBackground;
