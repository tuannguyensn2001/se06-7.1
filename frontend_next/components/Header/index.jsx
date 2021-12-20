import styles from "./style.module.scss";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Header() {
  return (
    <div className={styles.header}>
      <div className={"tw-flex tw-justify-between tw-px-10"}>
        <div>
          <div className={"tw-font-bold tw-text-lg"}>SE</div>
        </div>
        <div>
          <InputGroup>
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input placeholder={"Tìm kiếm"} />
          </InputGroup>
        </div>
        <div>Avatar</div>
      </div>
    </div>
  );
}

export default Header;
