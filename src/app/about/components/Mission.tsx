
import ListColumn from "components/reuseable/ListColumn";


export default function Mission() {
   const aboutList1 = [
        ['To preserve the authenticity and lineage of Yang Style Tai Chi.', 'Promote natural health and preventive wellness.'],
        ['Make Tai Chi accessible to all age groups.', 'Support senior citizens with safe and gentle movement.'],
        ['To develop skilled practitioners, instructors, and future masters.'],
        ['Spread Tai Chi as a way of life, not just an exercise'],
        
      ];
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
    

    <div className="col-lg-8 mx-auto">
      <h3 className="display-6 mb-4 text-center text-primary">Our Mission</h3>
      <p className="mb-5">
      We believe consistent practice leads to long-term physical stability, mental clarity, and emotional balance.
      </p>

      <ListColumn list={aboutList1} bulletColor="primary" />

    </div>
  </div>
  );
}
