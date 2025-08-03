<script setup>
import { ref } from "vue";

const activeId = ref(null);

function toggle(id) {
  activeId.value = activeId.value === id ? null : id;
}
</script>
<template>
  <aside class="sidebar">
    <div class="protocol-sidebar">
      <div class="sidebar">
        <div class="sidebar__content">
          <div class="sidebar__logo">
            <img
              src="@/assets/image/logo-team.svg"
              alt="Icon"
              class="sidebar__logo-icon"
            />
          </div>
          <ul class="menu menu__list">
            <li id="indicators" class="menu__item">
              <a
                href=""
                class="menu__link"
                @click.prevent="toggle('indicators')"
              >
                <img
                  src="@/assets/image/indicators.svg"
                  alt="Icon"
                  class="menu__icon"
                />
                <p class="menu__link-text">Показники</p>
              </a>
              <div
                class="menu__overlay"
                :class="{ active: activeId === 'indicators' }"
              >
                <div class="menu__points-wrap">
                  <ul class="menu__points-list">
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">тренування</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">елементи</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">вікові групи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li id="finances" class="menu__item">
              <a href="" class="menu__link" @click.prevent="toggle('finances')">
                <img
                  src="@/assets/image/finances.svg"
                  alt="Icon"
                  class="menu__icon"
                />
                <p class="menu__link-text">Фінанси</p>
              </a>
              <div
                class="menu__overlay"
                :class="{ active: activeId === 'finances' }"
              >
                <div class="menu__points-wrap">
                  <ul class="menu__points-list">
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">тренування</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">елементи</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">вікові групи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li id="groups" class="menu__item">
              <a href="" class="menu__link" @click.prevent="toggle('groups')">
                <img
                  src="@/assets/image/groups.svg"
                  alt="Icon"
                  class="menu__icon"
                />
                <p class="menu__link-text">Групи</p></a
              >
              <div
                class="menu__overlay"
                :class="{ active: activeId === 'groups' }"
              >
                <div class="menu__points-wrap">
                  <ul class="menu__points-list">
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">тренування</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">елементи</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">вікові групи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li id="couches" class="menu__item">
              <a href="" class="menu__link" @click.prevent="toggle('couches')">
                <img
                  src="@/assets/image/couches.svg"
                  alt="Icon"
                  class="menu__icon"
                />
                <p class="menu__link-text">Тренери</p></a
              >
              <div
                class="menu__overlay"
                :class="{ active: activeId === 'couches' }"
              >
                <div class="menu__points-wrap">
                  <ul class="menu__points-list">
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">тренування</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">елементи</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">вікові групи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li id="program" class="menu__item">
              <a href="" class="menu__link" @click.prevent="toggle('program')">
                <img
                  src="@/assets/image/program.svg"
                  alt="Icon"
                  class="menu__icon"
                />
                <p class="menu__link-text">Програма тренувань</p>
              </a>

              <div
                class="menu__overlay"
                :class="{ active: activeId === 'program' }"
              >
                <div class="menu__points-wrap">
                  <ul class="menu__points-list">
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">тренування</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">елементи</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">вікові групи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li id="players" class="menu__item">
              <a href="" class="menu__link" @click.prevent="toggle('players')">
                <img
                  src="@/assets/image/players.svg"
                  alt="Icon"
                  class="menu__icon"
                />
                <p class="menu__link-text">Гравці</p></a
              >
              <div
                class="menu__overlay"
                :class="{ active: activeId === 'players' }"
              >
                <div class="menu__points-wrap">
                  <ul class="menu__points-list">
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">тренування</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">елементи</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">вікові групи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li id="calendar" class="menu__item">
              <a href="" class="menu__link" @click.prevent="toggle('calendar')">
                <img
                  src="@/assets/image/calendar.svg"
                  alt="Icon"
                  class="menu__icon"
                />
                <p class="menu__link-text">Календар</p></a
              >
              <div
                class="menu__overlay"
                :class="{ active: activeId === 'calendar' }"
              >
                <div class="menu__points-wrap">
                  <ul class="menu__points-list">
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">тренування</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">елементи</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">вікові групи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li id="location" class="menu__item">
              <a href="" class="menu__link" @click.prevent="toggle('location')">
                <img
                  src="@/assets/image/location.svg"
                  alt="Icon"
                  class="menu__icon"
                />
                <p class="menu__link-text">Локації</p></a
              >
              <div
                class="menu__overlay"
                :class="{ active: activeId === 'location' }"
              >
                <div class="menu__points-wrap">
                  <ul class="menu__points-list">
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">тренування</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">елементи</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">вікові групи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li id="setting" class="menu__item">
              <a href="" class="menu__link" @click.prevent="toggle('setting')">
                <img
                  src="@/assets/image/setting.svg"
                  alt="Icon"
                  class="menu__icon"
                />
                <p class="menu__link-text">Налаштування</p></a
              >
              <div
                class="menu__overlay"
                :class="{ active: activeId === 'setting' }"
              >
                <div class="menu__points-wrap">
                  <ul class="menu__points-list">
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">тренування</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">елементи</a>
                    </li>
                    <li class="menu__points-item">
                      <a href="" class="menu__points-link">вікові групи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="menu__item item-logout">
              <a href="" class="menu__link">
                <img
                  src="@/assets/image/logout.svg"
                  alt="Icon"
                  class="menu__icon"
                />
                <p class="menu__link-text">Вийти</p></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
@use "../../src/assets/layouts/protocol-sidebar";
</style>
