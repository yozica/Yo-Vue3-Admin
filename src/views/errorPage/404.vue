<template>
  <div class="notFoundContainer">
    <h2 className="stateNumber">
      404 Not Found</h2>
    <h2
      className="text text-[20px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
      找不到这个页面了喵 X﹏X</h2>
  </div>
</template>

<style lang="scss" scoped>
.notFoundContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .stateNumber {
    font-size: 56px;
    margin-bottom: 40px;

  }

  .text {
    font-size: 20px;
  }

  .stateNumber,
  .text {
    font-weight: 800;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #ec4899, #8b5cf6);
  }
}
</style>