/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';

import { API_URL } from '../../config';
import styles from './catalog.module.css';
import Filters from './components/filters/filters';
import Lots from './components/lots/lots';

const Catalog = () => {
    const [lots, setLots] = useState([]);
    useEffect(() => {
        const getLots = async () => {
            try {
                const lotsRes = await fetch(`${API_URL}/lots`);
                setLots(await lotsRes.json());
            } catch (e) {
                console.error(e);
                const lotsStub = [
                    {
                        name: 'Nigga wood',
                        price: 200,
                        description: '',
                    },
                    {
                        name: 'Red wood',
                        price: 1000,
                        description: '',
                    },
                    {
                        name: 'Black wood',
                        price: 60,
                        description: '',
                    },
                ];
                setLots(Array.from({ length: 5 }, () => lotsStub).flat());
            }
        };
        getLots();
    }, [setLots]);

    const onLotsUpdate = (newLots) => setLots(newLots);


    return (
        <div className={styles.catalogWrapper}>
            <div className={styles.catalogBanner}>
                <h1 className={styles.bannerTitle}>Our fucking logs</h1>
            </div>
            <div className={styles.catalogBody}>
                <div className={styles.filter}>
                    <Filters lots={lots} onUpdate={onLotsUpdate} />
                </div>
                <div className={styles.lots}>
                    <Lots lots={lots} />
                </div>
            </div>

        </div>
    );
};

export default Catalog;
