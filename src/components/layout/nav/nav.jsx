import React from "react";
import { AppRoute } from "../../../const";
import Button from "/src/components/ui/button/button";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <Button key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </Button>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button key={AppRoute.ORDER} link={AppRoute.ORDER}>
        Купить
      </Button>
    )
  }
];

function Nav({ pageUrl }) {
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </nav>
  );
}

export default Nav;
