import Layout from '@/layouts/Default';
import ModelViewer from '@/components/ModelViewer';
import styles from './style.module.scss';
import ProfileModel from '@/features/3d-models/components/Profile';
import Action from '@/features/3d-models/components/Action';
import TagList from '@/features/3d-models/components/TagList';
import CommentList from '@/features/3d-models/components/CommentList';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import pusher from '@/utils/pusher';

function Model3D() {
  return (
    <Layout>
      <div className={'tw-grid tw-grid-cols-12 tw-gap-4 tw-mt-5 tw-px-5 '}>
        <div className={'tw-col-span-9'}>
          <div className={styles.model}>
            <ModelViewer
              cameraControls
              src={
                'http://backend_laravel.test/storage/models/78d23707-7f27-48bb-99a9-0af58d3fe874-RobotExpressive.glb'
              }
            />
          </div>
          <div className={'tw-mt-5'}>
            <h4 className={'tw-font-bold tw-text-2xl'}>Horse</h4>
            <p>3d Model</p>
          </div>
          <div className={'tw-mt-10'}>
            <ProfileModel />
            <div className={'tw-my-5'}>
              <Action />
            </div>
            <hr />
            <div>{/*<TagList />*/}</div>
            <div>
              <CommentList />
            </div>
          </div>
        </div>
        <div className={'tw-col-span-3'}>suggest</div>
      </div>
    </Layout>
  );
}

export default Model3D;
