<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <h2 class="header__title">Створення елементів тренування</h2>
        <div class="header__user user">
          <div class="user__notification">
            <div class="user__notification-icon-wrap">
              <svg class="user__notification-icon" width="15" height="16">
                <use href="@/assets/image/sign.svg"></use>
              </svg>
            </div>
          </div>
          <div class="user__content">
            <p class="user__name">
              Yaroslav<br />
              Vyshnyak
            </p>
            <div class="user__avatar">
              <img
                src="@/assets/image/couch.png"
                alt="Аватарка користувача"
                class="user__avatar-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use "../../src/assets/layouts/header";
</style>
