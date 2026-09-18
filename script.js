const productVariants = {
  '100': {
    article: '01306',
    price: 326.4,
    oldPrice: 349.2,
  },
  '500': {
    article: '01307',
    price: 1432,
    oldPrice: 1646,
  },
  '1000': {
    article: '01308',
    price: 2064,
    oldPrice: 2592,
  },
  '5000': {
    article: '01309',
    price: 6320,
    oldPrice: 8710,
  },
};

const articleNode = document.querySelector('#productArticle');
const currentPriceNode = document.querySelector('#currentPrice');
const oldPriceNode = document.querySelector('#oldPrice');
const packButtons = document.querySelectorAll('.pack-option');

function formatPrice(value) {
  return `${Number(value).toLocaleString('ru-RU', {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })} ₽`;
}

function updateVariant(selectedPack) {
  const variant = productVariants[selectedPack];

  if (!variant) return;

  articleNode.textContent = variant.article;
  currentPriceNode.textContent = formatPrice(variant.price);
  oldPriceNode.textContent = formatPrice(variant.oldPrice);

  packButtons.forEach((button) => {
    const isActive = button.dataset.pack === selectedPack;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

packButtons.forEach((button) => {
  button.addEventListener('click', () => {
    updateVariant(button.dataset.pack);
  });
});
