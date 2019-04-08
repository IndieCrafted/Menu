<template>
  <div class="menu-item">
    <div class="left">
      <span class="no">4</span>
      <div>
        <p>
          <span class="company">气泡实验室</span>
          <span class="name">及时雨浑浊IPA</span>
          <span class="addr">嘉善</span>
        </p>
        <p class="en-name">
          Bubble Lab Juicy Rain New England IPA
        </p>
      </div>
    </div>
    <div class="center">
      <div class="info">
        <p>风格：浑浊IPA</p>
        <p>酒精度：7.2%</p>
      </div>
    </div>
    <div class="right">
      <div class="sku">
        <span class="price">40元</span>
        <span class="nwt">400ml</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.menu-item {
  background: #7b899b;
  color: #fff;
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  &:nth-child(2n) {
    background: #26303d;
  }
  .left {
    font-size: 0;
    display: flex;
    align-items: center;
    .no {
      color: #ddd;
      font-size: 0.3rem;
      margin-right: 0.5rem;
    }
    .company {
      font-size: 0.5rem;
      color: #ddd;
      margin-right: 0.1rem;
    }
    .name {
      font-size: 0.5rem;
      font-weight: bold;
      margin-right: 0.1rem;
    }
    .en-name {
      font-size: 0.3rem;
    }
    .addr {
      font-size: 0.25rem;
      color: #ddd;
    }
  }
  .center {
    .info {
      font-size: 0;
      p {
        font-size: 0.25rem;
        color: #ddd;
      }
    }
  }
  .right {
    .sku {
      font-size: 0;
      .price {
        font-size: 0.5rem;
        font-weight: bold;
        margin-right: 0.1rem;
      }
      .nwt {
        font-size: 0.25rem;
        color: #ddd;
      }
    }
  }
}
</style>
