<template>
    <div class="contact-card">
        <img :src="require(`../assets/contactCards/${contact.chargePhoto}.jpg`)" alt="nie ma zdjecia xd" />
        <div class="info">
            <h4>{{ contact.chargeTitle }}</h4>
            <h4>{{ contact.chargeName }}</h4>
            <h5>{{ contact.chargeContact }}</h5>
            <h5>{{ contact.chargeMail }}</h5>
        </div>
    </div>
</template>

<script>

export default {
    name: "contactCard",
    props: ["contact"],
    components: {
    },
};
</script>

<style lang="scss" scoped>

.contact-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 210px;
  min-width: 300px;
  transition: 0.5s ease all;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  img {
    border-radius: 50%;
    z-index: 1;
    width: 80%;
    min-height: 400px;
    margin: auto;
    margin-top: 20px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 24px 64px;
    color: #000;

    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
      white-space: pre;
    }

    h5 {
      font-weight: 400;
      font-size: 14px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      transition: 0.5s ease-in all;

      &:hover {
        color: rgba(48, 48, 48, 0.8);
      }

      .arrow {
        width: 10px;
      }
    }
  }
}
</style>