import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Herobutton from './HeroButton'
const Micard = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADn5+eEhIQeHh7W1tb4+PhNTU37+/siIiJHR0fu7u7x8fHe3t7FxcWVlZWoqKiwsLAoKChubm51dXVBQUGPj48vLy9iYmK5ubkNDQ1aWlp8fHwTExNVVVU7OzsMG+iHAAACl0lEQVR4nO3d61LiQBBAYQhmCCvXcMcL7/+Wui4aLNvK9CTNNLXn+21iHxMSCqzJYAAAAAAAAAAAAAAAAAAAAHA7Yb4b1w9u7Q+LslNfsRn6N1lMkwNHuYePtUw8gC+5B4/3WiUElrmnVqn1Z+os98xK+6AMDA+5R9Y6KAvXuQfWO6oC7+tFeKEqPOSeNoXmnjHNPWySs6JwlXvYNEV84dV1pix8e9w2s67iC6+2Sn/PdyN/mllH0RtVp2arR8PhenFV+BS9URjeZ+E4eiMKXaFQRKErFIoodIVCEYWuUCii0BUKRRS6QqGIQlcoFFHoCoUiCl2hUEShKxSKKHSFQhGFrlAootAVCkUUukKhiEJXKBRR6AqFIgpdoVBEoSsUiih0hUIRha5QKKLQFQpFFLpCoYhCVygUUegKhSIKXaFQRKErFIr+r8IiBM/LDIWqc+Ffh5Fb31avTC+8FxRS2Iftcn60W3TyNbpwsDcaYfGxd7NlJ9fxhU82E2wuu5/b7F6zNOTCZoKvG+u2/WdTKBa+tjmPJtZ/Qc1yybXFAM2lbmmx++GzItBmec+T8TFULO5pdRBnn3s3WYZZdQiNXomf9yubk1S73LXJFOuPKWxWuNU/QcBkUf3T83Jnc6vQrXX9j9El3cY8IfD9rcepfc8+nHWX0UbY5R49Sq1YIfln48roLWpvXjZpJ+i1ouzg2D7jrMv+U0/P/kQ8RCL3iB1RSKF/FFLoH4UU+kchhf5ReD+F019EfCoZftk0d9I35bg9RG2f+GRKC1bflm3af/VtVEaBqZ8R9s/qEPo5iHbPoYt/CJctu2Oo/DrJjllht+c198jqnyt2ucMaxbqe9G7s5Up6UfUudxEAAAAAAAAAAAAAAIDaG0SPQ7UmYE6cAAAAAElFTkSuQmCC"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "center" }}>
                  Design + Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image="https://i.pinimg.com/originals/a6/f2/8d/a6f28d902481c566fe3630759d4f75aa.png"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "center" }}>
                  Mobile Friendly
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRIVEREYGBESGBoREhEYGBwYGBEYGBoZGhgYGBgcJC4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQgCBwMFBgT/xABQEAABAwIBBgYMCggEBwEAAAABAAIDBBEFBgcSITFBExdRk7PSFCIyNVRVYXFydIOSJDRCUlOBkaGx0RUWJZSytNPjM2JzwSNDRYKjwvBE/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANykqAFNlKAiIgIoupQRZSiICIoKCCVICAKUBERAWJWSIIAUoiAoJQqLIClFKAiIggqAFkiAiIgIiICIiAsSUJQBAAWSIgIixJQZIoClAREQQoXWZQ4zHR08tRN3EQvYbXOOprR5SSAq6YzlbiGIzWa+U6ZPB0sGlogcgY3W86tpudqCz6lVZo8dxHDpR288LxZxgmDw17f80b9oNrXtfkIVg8icpmYhTMma3ReDwc0d76DwATb/ACkEEeQ+RB6NFBKgFBkiIgIiglAJQFQAskBERARRdSgIiICgqUQYgLJEQERYlAJXDVVLIml8r2sYNrnuDWjzk6l5rL3K9mHQB5AfUSXbBDe2kRte7fotuL8pIG+4rrjuO1FZIZaqVz3a9EE9rGD8ljNjRqGz67lBZGTLzDWmxxCG/kdpD7W3Cx/X/DPD4vtP5KskNDK8XZE9zfnNY4j7QFn+i6jweXm3fkgtpT4hG+ETxvDoXNMjXt2OaLm4+wrWDs9kG6hltuJe0EjdqsvW5HxluD07XAhwpnAgixBs7aCqwkoNj5f5x2YhTsgjp3x2kbK5znhwcGteNGwHK4H6l3eYJ8GlWA27KIYW3tcxC+lo77aWjpf9q06uWCZzHBzHOa9utr2ktc08oI1hBvbPq+DsOEPt2SZQYBq0g3RPCHl0e5v5dFa/zcZctw0VLZIXStn0C1rXBugWaekTcb9IfYvG1VVJK7SlkfI8i2m9xebDddxJsuImw8qDdhz3QeAyc438lsrCsVZPTx1LbtjkjE3bbWNtc3tya1UUlWcyT7zU9tvYh/gcg+j9f8M8Pi+0/kpbl9hhNhXxfWSB9pCrN+i6jweXm3fkokw6ZoLnQSNaNZJY4ADykhBbaixCKdulTzMkZ85jmvA+tpX0hVEw7E5aeRslPI6OVux7DY+Y7iNWsG4KsBm3y8biDXRTANrIhpOA1NmZs02jcQbXHlBG2wD3qIiAsSUJQBAAWSIgIiIIClEQERRdBKiylEFYc5+MOqcRqSSdCBxpo27miMlrred2mfrXsc0GQ8UzDW1cYe3SLaeJwuw6Op0jm7Ha7tAOrtSbHVbWmU3xyt9Ym6RysJmj700ftunlQexa0AAAAAagBqAWQKhSAg+bE/8ABm/03/wlU9VyyF545E4cTf8AR9Pr1/4bR9wQVVRWp/UjDfF8HuBP1Hw3xfB7gQVZa6wWBKtT+o+G+L4PcCfqPhvi+D3AgqsrUZve9tB/oM/BT+o+G+L4PcC7yCFrGtZG0NYwBrWNAa1jQLANA1AAbkHMpWICyQaqzsZCwvgkraaJrJ4RpzNYA1s0fynFo1B7dbtLeAb31W07kzi7qSqp6hpI4J4c4D5TDqe362lw+tWdyy734j6pUdE9VNQXKBvrGwqSuGj7iP0W/gFzoMQFkiICIsSUGSLBEGaIsSUAlSAgClAREQVHym+OVvrE3SOVg80Y/ZNH7Xp5VX/KQgVlYd/ZEw/8jlYHNH3po/bfzEqD2YClEQFBKErwmcvLZtBDwcLga2Zv/DG3gWnUZXD7Q0HaRyAoPU0+MU8k0lOydjqiEAyRA9s0G27ftF7bLi67NVYyKwyrq6yPsWRzJmu4V9Vckwi/bPcd5NyLHuibbyrSMFgATcgazy+VBmiKCUAlQAgCyQEREHS5Zd78R9UqOieqnAK2GWR+AYh6rUdE9VQc7cguFRdxH6Lf4QvoXBR9xH6LfwC50BEWJKASpAQBSgIiIMXKQFKICIiAixuskFR8pvjlb6xN0jlYTNF3po/bdPKq95TfHK31ibpHKwmaLvTR+26eVB66Zxa1xDS4gEhotdxA2C5AufKVW/EcvcQFe6pLnRSRkxikdpaDGA64nsNr+U6jfWLWFrLLwmcLICPEGGSLRjrWDtZNjZgNjJLfc7aPKEHy8atJ2E6pFuyR2nYRcNPhfPvj36fJqtpalo+WSoxCruby1VU+wA3k6gB81rQPMAOQL5KzD5YpXQyxubO12g6MjttLcAN97i1ttxZb+zXZDiii4eoaOzZh2w29jsOsRj/MdRcfq3XId5kPkpHh1OI22dM+zqia2uR1tg5Gi5AHnO0leWzm5e1WHVEUVOyFzJIhKeEa4kHTc3UWuGqzQtnrz+O5I0VY9slXTiR7G8G1xe9tm3JtZrgNpP2oNO8dGIfRU3Nv66cdGIfRU3Nv662gM2OFeAjnZuup4scK8BHOzddBq7joxD6Km5t/XTjoxD6Km5t/XW0eLHCvARzs3XTixwrwEc7N10GruOjEPoqbm39dbkyOxaSroqaolDRJM0ucGghos4t1AknYBvXWcWOFeAjnZuuvSYZh0dPEyGBmhDGNFjLl2iCSdriSdZO0oPhyxHwDEfVajonqpytlll3vxH1So6J6qaguLR9xH6LfwC51wUfcR+i38Aua6CVAClEBERAREQEREEKEUgIAClEQVHym+OVvrE3SOVhM0Z/ZNH7b+YlVe8ph8MrfWJukcrCZpB+yaP238xKg9mCpUKUHU1eAU0s8NTLA11RT34KQ3u3kuBqda5IvexNxYrtkXR5V5RRUNO+eU3I7WOMGzpXnuWt/EncASg7slQAq4YFl1iPZ3CRuM0lTIGupdehINjWMHyNEag7dtN9ascwmwuLG2sbbHz70GaIiAouoJQBBkiIg6XLLvfiPqlR0T1U1Wyyy734j6pUdE9VQDNV0FwKQ9pH6Df4QvoAXBRjtI/Rb/CF9CAiKEEosSpCCUREBQQgKlBAClEQFF1KiyCpeUrrVdZy9kTdI5WBzRd6aP23TyqveU3xyt9Ym6RysJmi700ftunlQevlkDWlziA1oLi4mwAGskncFqGpzyAVtmRaWHN7QutaVx3ytvqA5GnWRtsTYbhcL6jsOojlWks5WbPg9Oqw6O8et81K3/l7y+MfN5WjZu1agG2nY9TimNZwzTShnCcKNmjyW26V9WjtvqtdVvy4yrfiNQZHXbEy7KeL6Nl9pGzTdYEnzDYAuiFdKIzCJXcAXCQw6R0C4Cwdo7L23ramaDIXTLK+rZ2jTeljI7tw/5pHID3PKRfcLh6TNTkN2GwVNSz4XK3tGEfFmHd5Hu38g1ct+6yty/psOlZFURzOe9nCtMbWOba5bY6T2m92ncvYLwGX2bw4lNHMKrguDj4LQ4PT0u2c699Ntu62eRB8PHVh/0FX7kX9RTx0UH0FV7kX9VdFxGnxkP3f+4sjmPcf+pD93/uIO546cP+gqubi/qKeOrD/oKv3Iv6i6PiNPjIfu/wDcTiNPjIfu/wDcQd5x1Yf9BV+5F/UXu8BxdlXBFURNc2OYFzQ8AOABLdYaSN3KtUcRp8ZD93/uLaWS+D9h0sFNwmnwLS3T0dHSu4uvo3NtvKgwyxPwDEPVZ+ieqnOddWwyy734j6pUdE9VOQXFo+4j9Fv4Bc64KPuI/Rb+AXOghQUKkBAAUoiAiIggBSiICi6EqEGSIiCo+U3xyt9Ym6RysJmi700ftunlVe8pvjlb6xN0jlYTNGf2TR+2/mJUHsyVAQBZINeYzmspZ6yOpaeDiLtOpp2jVM4axon5Fz3Vtu6x1r38cYaAGgBoAAaBYADUABuC5F89ZVsiY+SVwbHGC57zqDWjaUH0ItO4dnjBqpBUQ6NC46MT2gmSIDVpvHygdpAF231aW/b7HAgEG4IuDygoM0REBEWJKASpCAKUHS5Zd78R9UqOieqmq2WWXe/EfVKjonqpqC4tH3Efot/ALnXz0Z7SP0W/whfQghSiICglCoQNJE0UQZKCUKxsglZIiAiIgqRlIL1lZ6xL0jlYPNKP2VRe26eVV8ymPwyt9Ym6RysHmi700ftunlQe0Xk6jL2iZWCidLaTuTLq4Jr76o3Pvqd9VgdV76l6eaPSaRcjSBGkDZwuLXBGw+VVny9yKnw+Uk6UlNI48FUcpOvQk5H/AHO2jeAFnCVX/Orlx2W801M69HC7t3g6ql7d/lY07NxOvkt07c4FaaI0RfdhszhzfhBFbXHfk3X221ebkzdZHOxGe8gLaKEgzPFxwh2iJp5TvtsHlIuHoc0uQ3DubW1Tfg7DenjcP8dwPduB2saRq5SOQa9z1WIwxkNlnjY4jSAe9rCRsuA47NRXPBCyNrWMaGsYAxjWiwa0CwAG4ALUud7JStrKqB9JTGRjIAxzg5jbO03m3bEHYR9qDZ36cpfDIOdZ+afp2l8Mg51n5qufFtivgLvfj6ycWuK+Au5yProLFnHaXwuDnWfmgx2l8Lg51n5qupzb4qf/AMDvfj66ji2xXwF3vx9ZBYz9OUvhkHOs/NfZBMx7Q5j2uY7Y5pDmndqI1FVn4tsV8Bd78fWW+sgqCSnw+lhnYWSxsLXsJBLSXuO0EjYQg+rLLvfiPqlR0T1VAAWVrssT8AxD1Wo6J6qcSguLR9xH6LfwC51wUfcR+i38AudAUEqVjZAUgIApQEREBF19XiAZJFGW3Mmw6QFtYGw7do/2udS7BARFBKASgUALJBUfKb45W+sTdI5WEzRd6aP23TyqveU3xyt9Ym6RysJmi700ftunlQe0XyYhQxzxuinja+J40XMcLhw/2O+41hfVdSg0NjWaSdtXHHTO0qKV1+GcRemaNbg8fKNthG3Vey3RgmExUkMcFO3RjjFhyuO9zjvJOsrsUQERYkoJupUAKUBERAUEKUQdJlj3vxH1Wo6J6qcrZZZd78R9UqOieqmoLi0fcR+i38AudcFIe0j9Fv4BcqDJERAREQEREHSYmD2RTDRcWuJvbubt7YaQ0SDbWdZB5N67tdDiQHZVMSATY6Osdrr1kC9ydYHkudRubd8gglQEsskBERBVLLqidDiFcx+3h3vHoyHhGn3XNW4syuNskohS3AmpXOuze5kjy8PHk0nOaeSw5QuHO7kU+qa2rpWF1RC3RliHdTRi5BaN723OraQeUAHSFHXSQSNkhe6ORhu1zSWuad483KN6C3wCyVdKbO9iTWhrnQvI1ab4+2Pn0SB9y5eOTEfm0/Nu66CwyKvPHJiPzafm3ddZDPDiNr2p+bd10FgiVICr1xyYj82n5t3XTjkxH5tPzbuugsMirzxyYj82n5t3XTjjxL5tPzbuugsMsbqvjs8OI21tp/Nwbuuo45MR+bT827roLChSq88cmI/Np+bd11i/PDiRFhwDT84Rm4+1xH3INrZzsbjpsPqQ5w4SpjfTRMvrcZGlriByNa4m/mG8KttDSulkjijF3yvbGwcrnuDW/eQvoxfFp6uQy1UzpJCNrjqA5GtGpo8gAC2nmfyIcHtr6mMta0HsRjrhziQQZSNzbE6N9t77gSG5I2WAaNjQGj6hZcgCAKUBEUEoBKBQAskBERB0+IyME8Fy3hNYjBc8O7bU7tW6iNW/kK7hdDi0v/HpWDbpaTvMXNAvyi48wOj5Ae+QEREBQVKIMQF5LKbN7Q1rjJJGY53bZoiGuceVwsWuPlIv5V69EGoZMyEV+1r3gchiaT9ocFhxHs8YO5kddbhWJKDUHEezxg7mR104jo/GDuZHXW4FKDT3Eezxg7mR104j2eMHcyOutwog09xHs8YO5kddBmQZ4wdzI663Cosg0+cyDDtxB3MjrpxHs8YO5kddbhRBp7iPZ4wdzI66luY+O+vEH28kQH/stvkoCg8Nk/mvoKVweY3TyjW10xBa08oYAG/aDZe5AUogIiIIJUAKbKUBERARRdEHT4rO4TUrWlwa550iHAB2waJG07R9tt+ruV1NfRvdNA8AaLD2x0iHW1/J2WvbXtsSPP2yAsSUJQBBIUoiAiLElAJUgIApQEREEICoUgIJREQFBQlQghZAIpQERQSgXUrEBZICIiAsSVJKgBBFkWaIChSiDELJEQEREEFYt/8AvvREGaIiAoKIghqyREBERBiVIREEoiICxO9EQSFKIgKFKIMVkiICIiD/2Q=="
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "center" }}>
                  Website Audits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image="http://cdn.onlinewebfonts.com/svg/img_551091.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "center" }}>
                  Content Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Herobutton name="Learn More">

          </Herobutton>
        </Grid>
      </Grid>
    </>
  )
}
export default Micard