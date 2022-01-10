import { Image } from '@chakra-ui/react';
import styles from './style.module.scss';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  DeleteIcon,
  ViewIcon,
} from '@chakra-ui/icons';
import MySwal from '@/components/MySwal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Badge } from '@chakra-ui/react';

function CardModel({ preview, name, id, isPublish }) {
  const router = useRouter();
  const handleDelete = async () => {
    const result = await MySwal.fire({
      title: 'Xóa',
      text: 'Bạn có chắc chắn muốn xóa không ? ',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      icon: 'warning',
      confirmButtonColor: '#3182ce',
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;
  };

  const handleEdit = () => {
    router.push(`/my-models/${id}/edit`);
  };

  return (
    <div className={styles.card}>
      <div
        className={'tw-w-full tw-h-full tw-overflow-hidden tw-cursor-pointer'}
      >
        <Image className={styles.image} src={preview} />
      </div>
      <div
        className={'tw-bg-white tw-flex tw-justify-between tw-shadow tw-p-5'}
      >
        <div>
          {name}{' '}
          <Badge ml={3} colorScheme={isPublish ? 'green' : 'default'}>
            {isPublish ? 'Publish ' : 'Private'}
          </Badge>
        </div>

        <div>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {isPublish && (
                <MenuItem
                  onClick={() => router.push(`/3d-models/${id}`)}
                  icon={<ViewIcon />}
                >
                  Xem chi tiết
                </MenuItem>
              )}
              <MenuItem onClick={handleEdit} icon={<EditIcon />}>
                Chỉnh sửa
              </MenuItem>
              <MenuItem
                onClick={handleDelete}
                icon={<DeleteIcon color={'red'} />}
              >
                <p className={'tw-text-red-500'}>Xóa</p>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default CardModel;
