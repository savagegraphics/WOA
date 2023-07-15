import React from 'react';
import './LastCard.css';


const card = [
  {
    id: 1,
    imageSrc: "https://images.ctfassets.net/50gzycvace50/72e9d669c40ab143c82ef97fd055c3002ed1df6d63ee75feaf53924d624aea15/b8bc425b016b0aa6aaf0c0ca22290160/72e9d669c40ab143c82ef97fd055c3002ed1df6d63ee75feaf53924d624aea15.png?bg=rgb:ffffff&fl=progressive&fm=jpg&w=750&h=750",
    name: 'Sale'
  },
  {
    id: 2,
    imageSrc: "https://images.ctfassets.net/50gzycvace50/23abfabab6fc27b40a618b991dbfea58d30343a954a57095c7c4955f9d222e16/ae4f795d73890073147cde5d76759475/23abfabab6fc27b40a618b991dbfea58d30343a954a57095c7c4955f9d222e16.png?bg=rgb:ffffff&fl=progressive&fm=jpg&w=750&h=750",
    name: 'Summer Shop'
  },
  {
    id: 3,
    imageSrc: "https://media.istockphoto.com/id/1329021659/photo/stack-of-baby-boys-clothes-booties-and-toy-on-wooden-table-against-brown-background-space-for.webp?b=1&s=170667a&w=0&k=20&c=nZzpk8BSIW5xToVmoDFRAMMxIr38PjQrQOFzXSZt5aY=",
    name: 'New Arrivals'
  },
  {
    id: 4,
    imageSrc: "https://media.istockphoto.com/id/1174246319/photo/ready-and-waiting-for-him-to-arrive.webp?b=1&s=170667a&w=0&k=20&c=uiALFBgYDdu7GSWnWVK6Kr6QyMR2gpA-7Xlfd6jTi-Q=",
    name: 'Coming Soon'
  },
  {
    id: 5,
    imageSrc: "https://media.istockphoto.com/id/512098665/photo/shopping-for-children-clothes.webp?b=1&s=170667a&w=0&k=20&c=N_qFkL6EVl_MAf6KyPnQBYsijzjPCm2koGZZK09Z43I=",
    name: 'Top Registered'
  },
  {
    id: 6,
    imageSrc: "https://media.istockphoto.com/id/1460330514/photo/young-couple-in-baby-shop.webp?b=1&s=170667a&w=0&k=20&c=wAs2TkWExhH38LNCLrPcYgm32W57Z68XL_vCRm5uZVE=",
    name: 'Newborn Must-Have'
  },
  {
    id: 7,
    imageSrc: "https://media.istockphoto.com/id/1493608446/photo/mother-doing-shopping-in-baby-shop.webp?b=1&s=170667a&w=0&k=20&c=jM95yakSdY_AWi9ZbibkAQ-wi97J-T-MNjeH9lKgonU=",
    name: 'Only at Babylist'
  },
  {
    id: 8,
    imageSrc: "https://media.istockphoto.com/id/1467325778/photo/a-woman-chooses-childrens-clothes-in-a-childrens-clothing-store-pregnancy-and-shopping.webp?b=1&s=170667a&w=0&k=20&c=2xklFtubk89rHxFcgzsotVXb4WEAPy858uizJtGFbzE=",
    name: 'Try-it Kits'
  },
  {
    id: 9,
    imageSrc: "https://media.istockphoto.com/id/1464043637/photo/young-happy-woman-choosing-baby-clothes-at-the-store.webp?b=1&s=170667a&w=0&k=20&c=fTzwViU7fMgIt92edR0_v7mFTrq8VaD4tCTJ0-x4IYY=",
    name: 'Clothing & Accessories'
  },
  {
    id: 10,
    imageSrc: "https://media.istockphoto.com/id/468826814/photo/ball-pool-fun.jpg?s=612x612&w=0&k=20&c=CNn6GxkIVXckWWg9mDqs6vg4QnrwfXZXHU7zVtW_na8=",
    name: 'Nursery'
  },
  {
    id: 11,
    imageSrc: "https://media.istockphoto.com/id/1161220641/photo/pillows-and-toy-in-white-wooden-crib-with-pastel-pink-blanket-in-bright-nursery.webp?b=1&s=170667a&w=0&k=20&c=852dfad44gjtAsF4RE_6-8HLunwM2wLMVS0r6Ut24Ss=",
    name: 'Furniture'
  },
  {
    id: 12,
    imageSrc: "https://media.istockphoto.com/id/1453837306/photo/toddlers-playing-with-toys.webp?b=1&s=170667a&w=0&k=20&c=1Fu3Q2Qad37ed85KBVbuLMGrTzbqk0DqWWQsdeCh4pQ=",
    name: 'Play & Activity'
  },
  {
    id: 13,
    imageSrc: "https://media.istockphoto.com/id/1359696196/photo/asian-chinese-young-father-feeding-his-baby-boy-son-with-milk-bottle-at-living-room-during.webp?b=1&s=170667a&w=0&k=20&c=iKwfmCAsE-Meu3Es3fqq3bfL6mjVfeHrzRqoRXJg5Jk=",
    name: 'Nursing & Feeding'
  },
  {
    id: 14,
    imageSrc: "https://media.istockphoto.com/id/84142964/photo/baby-having-his-nappy-changed.webp?b=1&s=170667a&w=0&k=20&c=9skQLpy5pWrA_q-kG3MAOeVDehV9ML08NlHVqt3XI9o=",
    name: 'Diapering'
  },
  {
    id: 15,
    imageSrc: "https://media.istockphoto.com/id/1166345332/photo/pregnant-woman-shopping.webp?b=1&s=170667a&w=0&k=20&c=J0_YnehPqVkCIGoc_OCGFi2iYYwaCshNiaoZs-vzSeU=",
    name: 'Strollers'
  },
  {
    id: 16,
    imageSrc: "https://media.istockphoto.com/id/1009584862/photo/baby-boy-in-stroller-in-autumn-park.webp?b=1&s=170667a&w=0&k=20&c=fLLVxzLhkl5ydD1kHo_KqBu2ce2kgRCHV1KDeX2RHns=",
    name: 'Car Seats'
  },
  {
    id: 17,
    imageSrc: "https://media.istockphoto.com/id/1393780120/photo/mother-fastening-her-son-in-child-safety-seat-inside-car.webp?b=1&s=170667a&w=0&k=20&c=lshfzmDi5MhCFojkRXrLzikoVw83HSZBUuR7VIgNSfA=",
    name: 'Travel Systems'
  },
  {
    id: 18,
    imageSrc: "https://media.istockphoto.com/id/473871686/photo/mother-with-her-daughter.webp?b=1&s=170667a&w=0&k=20&c=Gu2yaIBOoSstFh6REXM_bOVbcqadOhIi4oWJhEKQ8ws=",
    name: 'Carriers'
  },
  {
    id: 19,
    imageSrc: "https://media.istockphoto.com/id/1069933778/photo/cute-little-boy-playing-with-a-railroad-train-toy.webp?b=1&s=170667a&w=0&k=20&c=EP3P7xvZtIJ780BrKQ35N-08kteFERzjTY-H1kv_fao=",
    name: 'Toys & Books'
  },
  {
    id: 20,
    imageSrc: "https://media.istockphoto.com/id/1416967951/photo/father-assisting-his-little-boy-sitting-on-pot-in-potty-training-giving-high-five-to-his-dad.webp?b=1&s=170667a&w=0&k=20&c=Wb2sMK8Wr7fFXw7lcFXdgcHiiBHZlAbQNKXplHvO8Ow=",
    name: 'Bath & Potty'
  },
  {
    id: 21,
    imageSrc: "https://media.istockphoto.com/id/477242008/photo/safety.webp?b=1&s=170667a&w=0&k=20&c=D26QPQzWvBAPo6ClgipF1S0P4FcP8-poIt324mZSQi8=",
    name: 'Health & Safety'
  },
  {
    id: 22,
    imageSrc: "https://media.istockphoto.com/id/1299083749/photo/pregnant-woman-holds-green-sprout-plant-near-her-belly-as-symbol-of-new-life-well-being.webp?b=1&s=170667a&w=0&k=20&c=tZ3GnFZaPV5eJLnV9MFY2k-NUHWODtFrvWAyvRvapKI=",
    name: 'Eco-Friendly'
  },
  {
    id: 23,
    imageSrc: "https://media.istockphoto.com/id/1328191260/photo/a-home-surveillance-camera-looks-at-the-crib-with-a-sleeping-newborn-baby.webp?b=1&s=170667a&w=0&k=20&c=SfG5_4BL1Zz4Y7VawoZmKr-wf7DBbZb2qEDQEgyk6I0=",
    name: 'Monitors & Cameras'
  },
  {
    id: 24,
    imageSrc: "https://media.istockphoto.com/id/1263861806/photo/birthday-gift-for-a-child-on-a-white-table.webp?b=1&s=170667a&w=0&k=20&c=qrnNAOXdD4rtcBoMzeYKDjc8TAqGX2uSOcchAlAAAe0=",
    name: 'Gift Cards, Favors'
  },
  {
    id: 25,
    imageSrc: "https://images.unsplash.com/photo-1549014285-5c0ca6a40e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFieSUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    name: 'Gift Shop'
  },
  {
    id: 26,
    imageSrc: "https://media.istockphoto.com/id/1362194222/photo/beautiful-woman-in-coat-stands-next-to-huge-box-of-stuffed-toys-and-holds-large-polar-bear-in.webp?b=1&s=170667a&w=0&k=20&c=DNiNCbPWSxpW0ve8RsxhUcUEjYPB5Gtja2PNiYcDDao=",
    name: 'Gift Sets'
  },
]

const LastCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 custom-grid-cols-2">
       {card.map((product) => (
      <div key={product.id}  className="max-w-xs rounded-2xl shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
 src={product.imageSrc}
           alt=""
          className="object-cover object-center w-full rounded-t-2xl h-60 dark:bg-gray-500"
        />
           <div className="flex flex-row justify-between p-6 space-y-0">
  <button
    type="button"
    className="flex items-center justify-start w-full pt-1 font-thin tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
  >
    {product.name}
  </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-8 flex items-right justify-self-right"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
</div>
      </div>
      ))}
 </div>
  );
};

export default LastCard;
