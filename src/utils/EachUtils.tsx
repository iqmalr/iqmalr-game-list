import { Children, ReactNode } from "react";

const EachUtils = ({
  render,
  of,
}: {
  render: (item: any, index: number) => ReactNode;
  of: any[];
}) => {
  return (
    <>
      {Children.toArray(
        of.map((item, index) => {
          // Log setiap item dan index
          //   console.log("Item:", item, "Index:", index);

          // Render item seperti biasa
          return render(item, index);
        })
      )}
    </>
  );
};

export default EachUtils;
