window.onload =()=>{
    let whiteRiceButton = document.getElementById(`white-rice-button`),
        californiaRiceButton = document.getElementById(`california-rice-button`),

        errorStyles = `background-color: red; padding: 2px; color: white;
        font-family: monospace; border-radius: 4px;`,
        resetErrorStyles = `background-color: inherit; padding: inherit;
        color: inherit; font-family: inherit; border-radius: none;`,

        whiteSection = document.getElementById(`white`),
        californiaSection = document.getElementById(`california`),

        amountOfRice = document.getElementById(`amount-of-rice`),

        cupsOfRice1 = document.getElementById(`cups-of-rice1`),
        cupsOfRice2 = document.getElementById(`cups-of-rice2`),
        whiteWaterAmount = document.getElementById(`white-water-amount`),
        californiaWaterAmount = document.getElementById(`california-water-amount`),
        softWaterAmount = document.getElementById(`soft-water-amount`),
        whiteOilAmount = document.getElementById(`white-oil-amount`),

    californiaSection.style.visibility = `hidden`;
    whiteSection.style.visibility = `hidden`;

    cupsOfRice1.textContent = 0;
    cupsOfRice2.textContent = 0;
    whiteWaterAmount.textContent = 0;
    californiaWaterAmount.textContent = 0;
    alDenteWaterAmount.textContent = 0;

    function showWhiteRice()
    {
        if(californiaSection.style.visibility === `visible`)
        {
            californiaSection.style.visibility = `hidden`;
        }
        while(whiteSection.style.visibility ===`hidden`)
        {
            whiteSection.style.visibility = `visible`;
        }
    }

    function showCaliforniaRice()
    {
        californiaSection.style.visibility = `visible`;
        whiteSection.style.visibility = `hidden`;
    }

    function calculateWater(e)
    {
        let tempSum;
        cupsOfRice1.textContent = e.target.value;
        cupsOfRice2.textContent = e.target.value;
        if(e.target.value == ``)
        {
            cupsOfRice1.textContent = 0;
            cupsOfRice2.textContent = 0;
        }
        whiteWaterAmount.textContent = 16 * e.target.value;
        tempSum = 12.8 * e.target.value;
        californiaWaterAmount.textContent = tempSum.toFixed(1);
        tempSum = 3.2 * e.target.value;
        alDenteWaterAmount.textContent = tempSum.toFixed(1);
    }

    if (null !== whiteRiceButton)
    {
        whiteRiceButton.addEventListener(`click`, showWhiteRice);
    }
    else
    {
        console.error(`A reference to ID %c white-rice-button %c could not be
            established.`,errorStyles, resetErrorStyles);
    }

    if (null !== californiaRiceButton)
    {
        californiaRiceButton.addEventListener(`click`, showCaliforniaRice);
    }
    else
    {
        console.error(`A reference to ID %c california-rice-button %c could not
            be established.`,errorStyles, resetErrorStyles);
    }

    if(null !== amountOfRice)
    {
        amountOfRice.addEventListener(`input`, calculateWater);
    }
    else
    {
        console.error(`A reference to ID %c amount-of-rice %c could not
            be established.`,errorStyles, resetErrorStyles);
    }
};
