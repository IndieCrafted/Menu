<template>
  <div class="menu-item">
    <div class="left">
      <span class="number">
        {{
        data.number >= 25 ? data.number - 24 : data.number
        }}
      </span>
      <div>
        <p class="basic">
          <span class="brand">{{ data.brand }}</span>
          <span class="name">{{ data.name }}</span>
          <span class="origin">{{ data.origin }}</span>
        </p>
        <p class="en-name">{{ data.enName }}</p>
      </div>
    </div>
    <div class="center">
      <div class="info">
        <p>风格: {{ data.style }}</p>
        <p>酒精度: {{ data.vol }}%</p>
      </div>
    </div>
    <div class="right">
      <div class="sku">
        <span class="price">{{ data.price ? parseFloat(data.price) : '' }}元</span>
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
  background: #434343;
  color: #fff;
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.2rem;
  &:nth-child(2n) {
    background: #171717;
  }
  .left {
    min-width: 60%;
    font-size: 0;
    display: flex;
    align-items: center;
    .number {
      color: #fafafa;
      font-size: 0.4rem;
      margin-right: 0.2rem;
      text-align: center;
      min-width: 0.5rem;
    }
    .basic {
      line-height: 1;
      .brand {
        font-size: 0.5rem;
        color: #fafafa;
        margin-right: 0.1rem;
      }
      .name {
        font-size: 0.6rem;
        margin-right: 0.1rem;
        font-family: "CuHei";
      }
      .origin {
        font-size: 0.35rem;
        color: #fafafa;
      }
    }
    .en-name {
      line-height: 1;
      margin-top: 0.05rem;
      font-size: 0.35rem;
      font-family: "En";
      color: #fafafa;
    }
  }
  .center {
    flex: 1;
    .info {
      font-size: 0;
      p {
        font-size: 0.35rem;
        color: #fafafa;
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
        margin-right: 0.1rem;
        font-family: "CuHei";
      }
      .spec {
        font-size: 0.35rem;
        color: #fafafa;
      }
    }
  }
}
</style>
