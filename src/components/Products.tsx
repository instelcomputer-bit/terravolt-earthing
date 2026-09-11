import { useEffect, useRef, useState } from "react";
import { categories, products } from "../data";
import type { Category, Product } from "../data";
import { Icon } from "./Icon";
import { SectionHeading } from "./Sections";
export function ProductCard({
  product,
  index,
  onDetails,
  onEnquire,
}: {
  product: Product;
  index: number;
  onDetails: (product: Product) => void;
  onEnquire: (name: string) => void;
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <span className="product-code">
          TV / {String(index + 1).padStart(2, "0")}
        </span>
        <img
          src={`/images/${product.id}.webp`}
          alt={product.name}
          width="384"
          height="341"
          loading="lazy"
        />
        <button
          className="product-expand"
          onClick={() => onDetails(product)}
          aria-label={`View ${product.name} details`}
        >
          <Icon name="arrowUp" size={18} />
        </button>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-actions">
          <button onClick={() => onDetails(product)}>
            View Details <Icon name="plus" size={15} />
          </button>
          <button
            onClick={() => onEnquire(product.name)}
            aria-label={`Enquire about ${product.name}`}
          >
            Enquire <Icon name="arrow" size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
function ProductDialog({
  product,
  onClose,
  onEnquire,
}: {
  product: Product | null;
  onClose: () => void;
  onEnquire: (name: string) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!product) return;
    const element = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    element?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      previous?.focus({ preventScroll: true });
    };
  }, [product]);
  return (
    <dialog
      ref={dialog}
      className="product-dialog"
      aria-labelledby="product-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {product && (
        <div className="dialog-inner">
          <button
            className="dialog-close"
            onClick={onClose}
            aria-label="Close product details"
          >
            <Icon name="close" />
          </button>
          <img
            src={`/images/${product.id}.webp`}
            alt={product.name}
            width="384"
            height="341"
          />
          <div className="dialog-copy">
            <p className="eyebrow">PRODUCT OVERVIEW</p>
            <h2 id="product-title">{product.name}</h2>
            <p>{product.detail}</p>
            <dl>
              <dt>Material</dt>
              <dd>{product.material}</dd>
              <dt>Sizes & specifications</dt>
              <dd>Confirmed against your project requirements</dd>
            </dl>
            <p className="small">
              Illustrative product image. Final dimensions, availability and
              specifications are confirmed at quotation.
            </p>
            <button
              className="button button-gold"
              onClick={() => {
                const name = product.name;
                onClose();
                window.setTimeout(() => onEnquire(name), 0);
              }}
            >
              Enquire About This Product <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
export function ProductGrid({
  onEnquire,
}: {
  onEnquire: (name: string) => void;
}) {
  const [category, setCategory] = useState<Category>("All products");
  const [selected, setSelected] = useState<Product | null>(null);
  const filtered = products.filter(
    (p) => category === "All products" || p.category === category,
  );
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="section-title-row">
          <SectionHeading
            eyebrow="OUR PRODUCT RANGE"
            title="Engineered for a stronger connection."
          />
          <p className="section-aside">
            From the electrode to the final connection.
            <br />
            Find the right components for your project.
          </p>
        </div>
        <div className="product-toolbar">
          <div
            className="product-filters"
            role="group"
            aria-label="Filter products"
          >
            {categories.map((item) => (
              <button
                key={item}
                aria-pressed={category === item}
                className={category === item ? "selected" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
                {item === "All products" && <span>12</span>}
              </button>
            ))}
          </div>
          <span className="product-count" aria-live="polite">
            {filtered.length} PRODUCTS
          </span>
        </div>
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              index={products.indexOf(product)}
              onDetails={setSelected}
              onEnquire={onEnquire}
            />
          ))}
        </div>
        <p className="product-footnote">
          Need a specific size or a complete bill of materials?{" "}
          <a href="#contact">
            Let’s discuss your requirements <Icon name="arrowUp" size={15} />
          </a>
        </p>
      </div>
      <ProductDialog
        product={selected}
        onClose={() => setSelected(null)}
        onEnquire={onEnquire}
      />
    </section>
  );
}
