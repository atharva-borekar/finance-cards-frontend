import { memo } from "react";

const CustomCard = (props: any) => {
  const { header, body, footer } = props;
  return (
    <div className="card card-custom bg-white border-white border-0 m-3">
      {header && (
        <div className="card-custom-img d-flex align-items-center px-2">
          {header}
        </div>
      )}
      {body && <div className="custom-card-body">{body}</div>}
      {/* <hr /> */}
      {footer && <div className="custom-card-footer">{footer}</div>}
    </div>
  );
};
export default memo(CustomCard);
