import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

function Sidebaropt() {
    return (
        <div className='Sidebaropt'>

            <div className='Follow'>
                <h3>Topics you may like.</h3>

            </div>

            <div className='side'>
            <img src='data:image/png;base64,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'></img>
            <a href='https://www.javascript.com/'>Javscript</a>

            </div>
            <div className='side'>
            <img src='data:image/png;base64,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'></img>
            <a href='https://www.java.com/'>Java</a>

            </div>
            <div className='side'>
            <img src='data:image/png;base64,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'></img>
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>CSS</a>

            </div>
            <div className='side'>
            <img src='data:image/png;base64,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'></img>
            <a href='https://reactjs.org/'>React</a>

            </div>
            <div className='side'>
            <img src='data:image/jpeg;base64,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'></img>
            <a href='https://getbootstrap.com/'>Bootstrap</a>

            </div>
            <div className='side'>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAAA8FBMVEX///+vKy3fLjGzs7Py8vKztLSwsLDhLC/DRUevKSuytravJyny9fWvJCbfKi319fXw3d3hTU/Ozs61rq62TE7gJyq5ubnV1dXgODvw5OTCwsLo6OjIyMivISPi4uLb29veICSwVlevOjyxe3yvNDbeHCCvHB6yoaHjX2GxgYG4oKCwaWq4VlewurrJeXqwW1yxb3CylJXDhofpoqPgQUSyjY3uy8zWTlCvQELTWVvBkZGxdHTsu7zNbG3hUlTaOTzni4zkbW/qq6zPY2TkcnS/aGnEU1bOtrfx09TGfn++lpfrsrPmf4DSYWLokpPdBw+IS3cfAAAVSUlEQVR4nN2d+VvbOBPHSXwE23FSEnKQiyRAUgIBQkm5y+623ZfS6///b145hz2yRodtcXTnp3322aV8OtLMfGckeWPjxazdqHfa5Zf7817Kyo2WYRu2Xa+0X/tX0Wrmbsu2jaWRf6j8V3xX7rXqa64VnVGvmK/9a2W2cq9i2zTYynf1xh+9MtudOsa19l2r8Yf6jgREPtfad63dP47ObNQNCdeKzmrt/kFBBQZEFTqj82fQmb2WkQRsuTCNVu+t0/UqVkKsEM+q9F77t+daud0R+styDdcS++5tFmLtijAguu50fPJ1rzqV0L25QqzdkPjLmnzb6vc3u93tw7ElobPfTiG2rHwFXK5x/vOhVsoXNnM5r7t/elh1JXStt1CIkYAojIdkHd78LPVLhXx+gZbLOV63O5iPZXTWKxdivU5dyOVas/utUi2/tCXags6/Op3bkpX5eoUYr/JdG/nFn062DshCzMfRFnQj72hedS1JVHmFQowERPEGM8bfLpuAK4YW0Pne1emsKvHdCxdiksrXIhvs/LrWp7iI1f71cjSc54/2FXzXeSHfmbKAaFVvfj6U4lyB1/637+Ti5vi54VHgOyFc/fkLMUnlS/xl3NxfLANi3Pp/NU59Bo3AOf7o6mxmSHxndJ6RrtxrWeKKozr7+pCvYVzEZ83HSnWEoAXmEd+dTaqyhPBMhZik8iWV1OTkssbhCnbal2LFRd229p2/fTtxhb57hkJMofKdnF+WasgGC+3gsVixZjl2t0HfecPbscR3hs6OmDwgBpVUn+uvpdM+FcsVu37sCdAWpUpusDeeSnzX0uI7syHcX8EGu/lcq6GBg0K7C9DcCW+3ATq/e7U3tmX7rmJm8l15VxjoCZc7uScbTIJFrPRpxyRohnUldttqZXb3B9IiOkMhZvbqkkrKeDp5OBBusGin/VNcoLlzT7Tb4MocKQigeho6SeVLpEo1qKRk63DttOaOufRadVvFbUvf+UMigPQWYuV2RRIQXVJJ9ZlKim/9X8UlmuEedlXRFr7zFQSQcjfTlFW+VvXp+kJtHYZOe1yjWVWk2hLSEd/Nq8K2ClmYnV0plzzQ2zf3TbyS4lvtByFbohnuXgK3Len8bu5UUkSTqCAsxCStgCDQT+63eJWUwA4eIzSrOkzkthWdN5QJoMB3eL9P1vO1VpVUkoW4dtoX0wzRDPcsqdsWcMR3w7O5uIjGCjFZ5RtIy/O4tFS20l0RoFlVJ7nbVr5zhkeyItqow0IsqHwlG+z8cz5BQIyRbZnQa4Z1xC2SVXx3dTuTFtGLnhGpfKWV1NPPZkmh4uDZwfcijTYRFsky84jvpALIqDc2JNLSnT7dbwmkipLTdmg0Y3qc2m1r33nbt2Ox7+obLRFYdXLykCpwQOt/KNILkritm8VtCzrP94d7It91Njocp5ENVv12nSLQx61Q2ImjGQZfkibBIwLolldE25WNBopGKvrzy35Wfy2d9teKzCyHf5Y7UyuSpXCkiL46nGClir27scugkQ1m3XxOVknxrZB/DNEir7lD5SJZZhwBZPc22jE0sg6f7vP97AtxZbUfpsl4zXCfpJJU3RZThMNYEW23N0x6HRpEWuYzBHrG+h+LCFoSbaNkpIgezGE30zI3zDpYibNvW3o2WGi1T0XMa0Tb6Agk0AIBROTd+g+olzfKEZp9n7aS4lv/Dkcz6pnSNofO96vrRdki5UiU2NyfOlfiwmrvd0wcLbm2UWHLrVekHaBFic29144WtERwNGus1ABKZt7VdI3WIWggIn/TjVbomyYHjWgb3buNoA1CrzUIGojI57rRFi0RDpplaIz/K/OPQrSgodADyaavl2zZEuGgGW56bcOz7l6IFqgaEyQbzWj9H0X+giRFcrIGkArabB0g7UCNlqM/b6oZ7fejCM0QzG3SmeNNQrSFxgZoTV3l1cJqf1NkDJo11rzbnP3xGs1aoEU5e3qpNWOX7sRohptRksbNuxrDjA1z9vSnTrTae9OUoM3SNoA4aIN1MbJIa1TO/qoz+lPpGkUzDMm4LaH5p+FWqyzQYGLTGEdKD6bMa8RtWnebf0alNTqxafRa2BIRoFmG1mrLp9PaBhCj7pM+stLFOzmaZm3TnYd6bYlmhuLUnTxoi/5RS0SEZlV1uq0bprX6cioViVFrvKUtRPYZp2FoerXNKFRr9WVrvBxGf6uqLbGBlogQLem4TWSOt5Y0q7RGidFrXWiFO8ZpKJrh3mpzmzOk1Bqd2Ka6xGjtPUtmltnGoFa3AbVWWaEBMXqiCe034jQcTaO2AWqtsULb1Z6zqZZIhFbBWtjWWFe11T0M0dbT0bZ2Mcqm68CKJ1W0Pa/Lbd1ZLGNTYnR8oINscUqEJbuL/lopt2Ubt4Xm5GghGlNsrhY0JF0H9mNzv46gEW2jJW0DtWaEA99ombhNDWSFJpuuidMe85ujG9xtWuI/UGv1EA0kNh3lCJauCdqvg01/gO02qzrQ4TbvOKbWYopNR87uP6LrsVnazI2eMLe5cx2BxDtl0hql2DTkbDRdm8XvtcImWTToyXAt4zZGrcUS27fs0b+PpWvT/DtAc7wZ7jYNuw00IaNDP0CM3mT2Gp6uix/7i9sZ/inmNS3jNkatLXJ29NeXXYwyLZEl2o/aAs3pTlC3adA2o6hTF6FFii27GC3kUbJ3zcLyTo13jO+27HP7kR1TawvFBsToRUa0A7zG+tBfXRdychOs2squbRwv/DuL0hpIbJnFaGkLS9fmTpAvlzeh/CN0t41THCWkDATfFoaWObHhNVbxLijgVrcOHbRIzqxtgFrrALRIsU0/ZwuRB6jTiu9rIVrO/zpF0CzufRtFA2mtAdC05ez4BGNF9tiM7opSZaxGtwG1Bs8h97Tl7I8o2l+LH7q+ddg9w4vkbJ0Ef86otZgYvcmCxkwwVkGkWYJoTg7fbZmKZKjW4NH4aHxoTbIotgO0xip+WP7M8K5o9xZ3W5bd5gzHrBANDOzmDF5bn8SN2/sajeZdoW6zskhSVK0FBtRvBjHKaYncraqA6IZvVMlSK1Lxvg2OdmzTY8MwsUU9hPRilJOui19qcTQnZ6ANoAxFMlBrHQotSmxW+pzNSdc7690L7mXjDSB3nn63IU1IfYmtUNtB0X6tdy9A87bRToKdfm4D1Bp9vQaK0bRofbwlsvNpvQzgbXogrqDb9lKnbfAD6dsnQLGlPc1UaOLp+nsYciGah/btMozbIrVmtHloNymdhrdEVuUjg8ZrAKXWNtFszaIvswEx+pQy+h/gTnv8HfkVokWtNdptKastZ99AhCid2KxJOjFa+4S1RNblI4vm+GgDyEp5lNC7Cn8EnbEhWjVdYqt9x512gb83Ao9lUmjjdG7zwiMjsYxNdVkv03itdNFGnfYB1G2x90ZGeCch3Zk0/yx2GgbL2elOM+EtEbOYBz8shsbp241TVVsctUYntlRD39IDXmPdQR0RfyXGQ92WbtzmzZH+6ir6Z8vZnLGT+QX+rBhazh+gu23ip7hLylFri+ifTYyW0AlG8TEP920czfHxTkIKbcNVaxtQjLopxCgvXf9F/S3F0UBJS6HNkqdtoAAtBg1E/+Req6Hp2mxTTmPRHAfbbWnGbaAnHU9rVJc1cTlS+xvdaMV/6L8kBo24DdttKeY2XLVGJbYUORtviZg77+mAxKI5OXS3TROnbdCEjKc1mNjspGK0hE4wFnMnCVrORxtAiZ6AWBhIaw0GLUpsVtLE1kfHTrDm56Lhbks+bhtFsZ9956GX+jQTcqhzQfYufrQeQeP07RJrm0jSGOyrP+nFKH1xJkL7FY+0GJqzj7dbk6Vt2LRlnx6JLlYmFaO/0ZbIcu4kRcv5eAMomducIT+tkcQWHdNNJkZjF2dCp31nMj+K5g1RSZps3OYdR5GCIQOKLdnQt4BPMIIgUohZadNDbIS7LVGRDMaRbMamcnYSnc1L1x+brP27jdkAbwAleUsAdOrYjE2dZU2Ssznpmuw11jpV1BCyhC93RBsWydiwyzpNkLNLWxwy4ri4lSuGhRmOJn7ejjLHmXOFaGC9VENfvCWCG3goQMESjNuc/ShjY4/ZtdPk7PAtEf1olvp9G6jWsBe1gBhVP4HMaYnoQDMMZbd5V4YgrUHFpn4CmTPB0IOmPm7ztiO1JkazxqoLklNjafKaq1okR2qNaUIuLUpsY8VyhDPB0IamOm4Dag1La0CxKYvR2pckZInRlOc2XXFaA4lN+aAWPsHQhqY8bgNqjRWigYFrIWqJjVNj6UNTfd6uG8V+/NG6xGI0SbpOhaaobYDmQzM2pdiUGsi8UyIa0dTGbfAYCv6OYjlCO1cp/ROl63RoauM2D9weQMnAkR+lE8iliyTpOi2ayjUpeHiUgwbEqEJiS5auU6IpSVLQ8cMzNt1Alq7IQgntY+lGsyZyt3mHkoxNjQ/lOruGt0R0oylIUqjW8LRGjQ/lOZszwWAFKLBKTIKKXniM3CaL/3C2xvv2EhCj0qHv6nlV1t4JjNNACA1FncqKZHlaoxSbtDfOaYkU/7nY4tvnY54NAjvFu62yuY0zjFpivKedwYsBMjFausCX4877WolrtU0f69aFxjncakskqUytBZZAjOIXZ9jhDGVoi5X6HTluE2sbqNa4jzqH0d+diBdk6ROerot/i/4/GRrn3JZs3CZVa4FF40OJGOVNMHbyoqQhRQNLi3KbeNzWlac1WowKE9sBx2kfhOtYigbCOLXbxJIUqDVciAamKkY5EwxmwpsUDRxHot0mut0Gjmig/dWlRYnNFiW2QhO/51r8KD6WIUdzPPyUvOjpbnCPhZvWqC6rKLHxWiLFL+LgI0fjDEmJJOVXWyCuov3VpZlqOvs3Z+zETHiTo4FjjZTbBOM2oNZsLhl4McA95y9IztEeWRBRQuMMSUXaxj8K17AILfpRN3y0Pq8lIg4iamjeMcdt3HEbUGvY2HBtQIxyf8ESfhJXGkTU0HIj9AawQNtEao0rRAMDR364vyCvJSILIopo/il2tslwueM2cBKSn9ao8SEvJBTy+GosPj7IhJASmrOPHwB1T/G0DY6wCdIaJUZ5vXFeSyR+1iwtGueWFHfcBo6McIVoYFFi4w19Sw94ujZN+ZxADc3xMTKiyHFt4+yHC1iQsWGXlXcCmZuupUFEFS3XRd9b4Y3bwHVsS/SNIXBJg9NAPuA4TR5ElNE48Z8zbgNqjStEA4veeOOcQOZNMIrvLuTDHUU0x0Prf04nIVJrwtgvF6Px51VDNFklkgAN3IundxuqbZTUWmBhYsMbyKVPuNNUgog6GjwCSLkNe0yyq6LWAovEKPqEBaclQoLIb/Y/To/mo3fS0bmN44wlY8O17QIxyqJxT4kED6VoRAMXkWm3seM2eGRE/G37UIxa2AlkbrpWCSIJ0HL4e1vYNSmo1sRfrRR2WQtNntM+KN16UEeLPjkQd1t8t3nRnSPmWgZtZZEY7fMOHBSVnJYALdfF23astgEXPERqLTDB4/6FPGfspBZEEqHhF8AQSRq9B4yeX4UWlSPMs1PcCYZaEEmExnkBiH2V0FdTa4G1osQW/337vLGTXM4kRsv5X/HdFpekvmpao7qssfqCe6hTMYgkQ+O8ScK83NFVTWuUYou5gvNeG0FrKh56TYLGuZISH7c5fhRFZJ/f7PGGvsEEAzcFOZMCjTO2iWkbVbUWGFeM9n/tBIPNx8A+ruxuYcLpTGq03OipXq+7rFlQksIBiAwtGh/GTiAXLrYuFvbwsDravvr3JeUz2MnQnH1wYP54MDgldnR0dHYL0Xyg1mQfuwViNJazC6vZZnQlQRUpHRrRbTHzlwb3GmikC4VoYFIxmsESoqkYeIpDltZgYtP53YJnQvPAbE0sRAOLuqyTC81sutEcf3hoK2ds2GW1Jj9TfwD2BdAcf3Q0jr4BKE1r1FlW151cFzTCaUXznNMx/LihRIgGRn3W0bVvHvR5TiOaN9qe0ZdxBGPDtZnUETHLdc+3dG05bWhOd3vuxuowiRBdGPMtmfFXTZ+s1ITm+LnDKlNgyoRoYPH/x7Cm1fu8jlWpBY2AnSFf7rVFY8O1ddhPMbvG5FK9nnpWNM87nbA33myjIt9qxNotho0Ey5vLzB+IzY7mjQazKfK93o4SWGC9OgJXPX8oZYPLiub5V3ObVXF2S1bzU7ZrsR8Ccqsn2eJJNjSnO9yzsU0mT2i0lSsY3PhzlniSCc3fP6sim8xqKAT9uJlYPHGfrtOn8PRojtc9miAes9WiBwKHfNzdNZ4u02651GieN0DComGoRw/W2ng8yfdTwaVE80ZXcwOJHvVE0YO1XRYuiCcPaeJJKjSne7UXL6qMNNGDtXKD3XLWdPL5IPmWS4Hm+P4RW1SRTZYmeiBwFYONJ9PJz8QpPDmalzvFiiqjogUsMBOrT4ybrYQfDk+K5vnbM/YGh50wRcsML77OtxJ1hhI267rHc9ZjSWsPFeuxKZzonUT1SaKev7+PKBcSPeR9ghSGFV/T8X1JGS7BVDSoPbCiSjaySGtoPLFm16p6R/0EQu50jCoXbdGDNbOCFF/Tm0u1TKB4/MzrDtCiKkvtoWJtrPiyz7dUMoESmuddzbDaQ3/0YA0Rc0F90tRy/Mzp7h9qUS4pDS++Pkvh5BdP/P3bF40erKHFl1zvSNAcv3s0RpXLM0YPBA4Llu6TuH8iRvOcAQZmdF4ULDBSn7Bw1fOmQO+I0LzRECmqsiuX1HDsqnRP+PMdPprjX82tV4werCHFV9A/4VXNPDSyyW6fUbmkNCxYTiec+gRHc/zcEa5cXpErMBOLJ/YTqnfwlwZ9rO/x/LWHGhwTT5bzHSaeIGhe93j2MsolnaFiDqlP2HeP/eEcVS6vFj1Y6yHBkuidmJiLP5/e3d/DNpn1LJIsvSHxxLUm11SzmUYj0QNN0S9be6hYuYHXJ6D4AmiONzpFNtnbiB6sYWMCUp9chM3mCM3zBjOsHfxWogdrbXZMQCTBt/WWC7+/1h0eou3gNxQ9WEOLr+o9/LQcCYv4MOmNRQ/W0Mnc7Ppg9fFNrnJpvMlNFrMGEizdYL4TfHk5dpBlBaY4in59K2PNoUDvbI6250j0eDO1h4qZHeb3J5rl2/F8ijV03nT0YA2ZzJF4goAZu28uRUsN63yxYK8qydIbEixjYG+z9lAxrDkEyDp/UPRgrdzhwb3x2kPFMDH3R9QeKsbC2dbbUy4pjY4nb1W5pDRQfNmt/xLYRtQc+g9ED9ZI8WX/R6IHa+3Wi9Ye/wc34NvMc9L2xQAAAABJRU5ErkJggg=='></img>
            <a href='https://angular.io/'>Angular</a>
            <br></br>

            </div>
            
            <div className='Add'>
               <p>Discover more.</p>
                <AiOutlinePlusCircle size='25px' />
            </div>
            
            
        </div>
    )
}

export default Sidebaropt
