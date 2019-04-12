<template>
  <div class="menu-item">
    <div class="left">
      <span class="number">{{ data.number }}</span>
      <div>
        <p class="basic">
          <span class="brand">{{ data.brand }}</span>
          <span class="name">{{ data.name }}</span>
          <span class="origin">{{ data.origin }}</span>
        </p>
        <p class="en-name">
          {{ data.enName }}
        </p>
      </div>
    </div>
    <div class="center">
      <div class="info">
        <p>风格：{{ data.style }}</p>
        <p>酒精度：{{ data.vol }}</p>
      </div>
    </div>
    <div class="right">
      <div class="sku">
        <span class="price">{{ ~~data.price }}元</span>
        <span class="spec">{{ data.spec }}ml</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-item {
  background: #7b899b;
  color: #fff;
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.4rem;
  &:nth-child(2n) {
    background: #26303d;
  }
  .left {
    min-width: 60%;
    font-size: 0;
    display: flex;
    align-items: center;
    .number {
      color: #ddd;
      font-size: 0.4rem;
      margin-right: .4rem;
    }
    .basic {
      line-height: 1;
      .brand {
        font-size: 0.7rem;
        color: #ddd;
        margin-right: 0.2rem;
      }
      .name {
        font-size: 0.7rem;
        margin-right: 0.2rem;
        font-family: 'CuHei';
      }
      .origin {
        font-size: 0.35rem;
        color: #ddd;
      }
    }
    .en-name {
      line-height: 1;
      margin-top: .1rem;
      font-size: 0.35rem;
      font-family: 'En';
    }
  }
  .center {
    flex: 1;
    .info {
      font-size: 0;
      p {
        font-size: 0.35rem;
        color: #ddd;
      }
    }
  }
  .right {
    flex: 1;
    text-align: right;
    .sku {
      font-size: 0;
      .price {
        font-size: 0.7rem;
        margin-right: 0.2rem;
        font-family: 'CuHei';
      }
      .spec {
        font-size: 0.35rem;
        color: #ddd;
      }
    }
  }
}
</style>
