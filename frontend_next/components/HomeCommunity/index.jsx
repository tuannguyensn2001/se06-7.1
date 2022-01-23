import Community from './Community/Community';

import {Button} from '@chakra-ui/react';
import {useQuery} from "react-query";
import {fetchSuggestModel} from "@/services/model";
import {useState} from "react";

function HomeCommunity() {
    const [artworks, setArtworks] = useState([]);

    const {data} = useQuery('models', async () => {
        const response = await fetchSuggestModel();
        return response.data.data;
    }, {
        onSuccess(data) {
            setArtworks(data.map(item => ({
                ...item,
                link: item.preview || 'https://static.automotor.vn/w827/images/upload/2021/07/24/custom-harley-davidson-night-rod-automotor2.jpeg',
                name: item.name,
                view: '1k',
                chat: '2k',
                star: '3k'
            })))
        }
    })

    return (
        <div className={'tw-bg-cyan-50'}>
            <div className={'section-layout'}>
                <div className={'section-header'}>Join millions of 3D creators</div>
                <div className={'section-sub-header'}>
                    Get inspired. Showcase your skills. Learn from millions of community
                    members.
                </div>
                <div
                    className={'tw-mt-8 tw-gap-4 tw-grid tw-grid-cols-4 tw-grid-rows-3'}
                >
                    {artworks.map((artwork, index) => {
                        return (
                            <Community
                                id={artwork.id}
                                key={index}
                                link={artwork.link}
                                name={artwork.name}
                                view={artwork.view}
                                chat={artwork.chat}
                                star={artwork.star}
                            />
                        );
                    })}
                </div>
                <Button className="tw-mt-16" colorScheme={'telegram'}>
                    JOIN SKETCHFAB
                </Button>
            </div>
        </div>
    );
}

export default HomeCommunity;
