import React from 'react';

import { Page } from '../../components/Page/Page';

export const Home = (): JSX.Element => {
  const [state, setState] = React.useState<any | undefined>({
    plan: 'sprwt',
  });

  const Payment = 'Payment';
  const Modules = 'Modules';

  const PaymentPresets = [
    ['Sprwt Service Fee (Amount) - Sales', { seed: 0, sprwt: 0, bloom: 0, orchard: 0 }],
    [
      'Sprwt Service Fee (Max Amount on Cart to Percentage Fee)',
      { seed: 10, sprwt: 10, bloom: 10, orchard: 10 },
    ],
    [
      'Sprwt Service Fee (Min Amount on Cart to Apply)',
      { seed: 3.5, sprwt: 3.5, bloom: 3.5, orchard: 3.5 },
    ],
    ['Sprwt Service Fee (Percentage Fee)', { seed: 15, sprwt: 15, bloom: 15, orchard: 15 }],
    ['Stripe Processing Fee (%) - Sales', { seed: 0, sprwt: 0, bloom: 0, orchard: 0 }],
  ];

  const ModulePresets = [
    ['Packs', { bloom: '', orchard: '' }],
    ['By Pounds', { orchard: '' }],
    ['subscriptions', { sprwt: '', bloom: '', orchard: '' }],
    ['Choose Subscriptions', { sprwt: '', bloom: '', orchard: '' }],
    ['Choose Meals On Subscriptions', { sprwt: '', bloom: '', orchard: '' }],
    ['A la cart', { seed: '', sprwt: '', bloom: '', orchard: '' }],
    ['Custom Meals', { orchard: '' }],
    ['GiftCards', { bloom: '', orchard: '' }],
    ['Extras', { orchard: '' }],
    ['SMS', { seed: '', sprwt: '', bloom: '', orchard: '' }],
    ['One Time Fee', { bloom: '', orchard: '' }],
    ['Bags', { bloom: '', orchard: '' }],
    ['Old Delivery/Pickup Labels', {}],
    ['Marketing Hub', { bloom: '', orchard: '' }],
    ['Fedex', {}],
    ['Macros', { sprwt: '', bloom: '', orchard: '' }],
    ['Grabandgo', {}],
    ['Retail', {}],
    ['Pos', {}],
    ['Ingredients API', { seed: '', sprwt: '', bloom: '', orchard: '' }],
    ['Labels', { sprwt: '', bloom: '', orchard: '' }],
    ['Sales', { bloom: '', orchard: '' }],
    ['Packing Slip', { sprwt: '', bloom: '', orchard: '' }],
    ['Allergens & Dislikes', { seed: '', sprwt: '', bloom: '', orchard: '' }],
    ['Portions', { seed: '', sprwt: '', bloom: '', orchard: '' }],
    ['Meal Kits', {}],
    ['Subscriptions Reorder', {}],
    ['Root Planner', { seed: '', sprwt: '', bloom: '', orchard: '' }],
    ['Meal Categories', { seed: '', sprwt: '', bloom: '', orchard: '' }],
    ['Wholesale', {}],
    ['Vendors', { seed: '', sprwt: '', bloom: '', orchard: '' }],
    ['Checkout As', { seed: '', sprwt: '', bloom: '', orchard: '' }],
    ['Suppliers', { seed: '', sprwt: '', bloom: '', orchard: '' }],
    ['Klaviyo', {}],
    ['Stats', {}],
  ];

  return (
    <Page description="foobar" keywords="very foobar" title="ultra foobar">
      <div>
        <a
          href="/#seed"
          onClick={(e) => {
            e.preventDefault();
            setState((s: any) => ({ ...setState, plan: 'seed' }));
          }}
        >
          Seed
        </a>
        <a
          href="/#sprwt"
          onClick={(e) => {
            e.preventDefault();
            setState((s: any) => ({ ...setState, plan: 'sprwt' }));
          }}
        >
          Sprwt
        </a>
        <a
          href="/#bloom"
          onClick={(e) => {
            e.preventDefault();
            setState((s: any) => ({ ...setState, plan: 'bloom' }));
          }}
        >
          Bloom
        </a>
        <a
          href="/#orchard"
          onClick={(e) => {
            e.preventDefault();
            setState((s: any) => ({ ...setState, plan: 'orchard' }));
          }}
        >
          Orchard
        </a>
        <br />
        Sprwt Modules:
        <br />
        <h2>
          {state.plan} {Payment} Setup
        </h2>
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {PaymentPresets.map((e: any) => (
              <tr key={e[0] as string}>
                <td>{e[0]}</td>
                <td>{e[1][state.plan]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>
          {state.plan} {Modules}
        </h2>
        <ul>
          {ModulePresets.filter((e) => Object.hasOwnProperty.call(e[1], state.plan)).map((e) => (
            <li key={e[0] as string}>{e[0] as string}</li>
          ))}
        </ul>
      </div>
    </Page>
  );
};

// import { useCounter } from '../../database/counter';
// import { useCounter as useCounterRedux } from '../../store/counter';

// export const Home = (): JSX.Element => {
//   const { counter, handleDecrementClick, handleIncrementClick } = useCounter();
//   const { counter: c, handleDecrementClick: hDC, handleIncrementClick: hIC } = useCounterRedux();
//   const homeText = 'Home';

//   return (
//     <Page description={homeText} keywords={homeText} title={homeText}>
//       <p>Dexie Count (Persistent): {counter.count}</p>
//       <p>Redux Count: {c.count}</p>
//       <button
//         onClick={() => {
//           handleDecrementClick();
//           hDC();
//         }}
//         type="button"
//       >
//         -
//       </button>
//       <button
//         onClick={() => {
//           handleIncrementClick();
//           hIC();
//         }}
//         type="button"
//       >
//         +
//       </button>
//     </Page>
//   );
// };
