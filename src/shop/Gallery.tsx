import React from 'react';
import { CSSProperties } from 'react';
import Image from 'next/image'


const styles: { [key: string]: CSSProperties } = {
    htmlBody: {
        height: '100%',
        fontSize: '16px',
        lineHeight: '1.5',
        fontFamily: 'Trebuchet MS, Helvetica, Arial, sans-serif',
    },
    body: {
        overflow: 'hidden',
        backgroundColor: '#222',
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,.025) 10%, transparent 0),
      linear-gradient(#222, #000)`,
        backgroundSize: '.75em 100%, 100% 100%',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        position: 'relative',
        flexGrow: 1,
        margin: 'auto',
        maxWidth: '1200px',
        maxHeight: '1200px',
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridGap: '2vmin',
        justifyItems: 'center',
        alignItems: 'center',
    },
    img: {
        zIndex: 1,
        gridColumn: 'span 2',
        maxWidth: '100%',
        marginBottom: '-52%',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        transform: 'scale(1)',
        transition: 'all .25s',
    },
    '&:nth-child(7n + 1)': {
        gridColumn: '2 / span 2',
    },
    '&:hover': {
        zIndex: 2,
        transform: 'scale(1.5)',
    },
};



const Gallery = () => {
    return (
        <div style={styles.htmlBody}>
            <div style={styles.body}>
                <div style={styles.wrapper}>
                    <Image
                        style={styles.img}
                        src="https://source.unsplash.com/random/600x600?water"
                        alt="Water"
                        width={600}
                        height={600}
                    />
                    <Image
                        style={styles.img}
                        src="https://source.unsplash.com/random/600x600?summer"
                        alt="Summer"
                        width={600}
                        height={600}
                    />
                    <Image
                        style={styles.img}
                        src="https://source.unsplash.com/random/600x600?plants"
                        alt="Plants"
                        width={600}
                        height={600}
                    />
                    <Image
                        style={styles.img}
                        src="https://source.unsplash.com/random/600x600?water"
                        alt="Water"
                        width={600}
                        height={600}
                    />
                    <Image
                        style={styles.img}
                        src="https://source.unsplash.com/random/600x600?summer"
                        alt="Summer"
                        width={600}
                        height={600}
                    />
                    <Image
                        style={styles.img}
                        src="https://source.unsplash.com/random/600x600?plants"
                        alt="Plants"
                        width={600}
                        height={600}
                    />   <Image
                        style={styles.img}
                        src="https://source.unsplash.com/random/600x600?water"
                        alt="Water"
                        width={600}
                        height={600}
                    />
                    <Image
                        style={styles.img}
                        src="https://source.unsplash.com/random/600x600?summer"
                        alt="Summer"
                        width={600}
                        height={600}
                    />
                    <Image
                        style={styles.img}
                        src="https://source.unsplash.com/random/600x600?plants"
                        alt="Plants"
                        width={600}
                        height={600}
                    />
                    <Image
                        style={styles.img}
                        src="https://source.unsplash.com/random/600x600?plants"
                        alt="Plants"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
