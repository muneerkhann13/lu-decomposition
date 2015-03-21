module.exports = function (A, L, U) 
{
    var m=A.shape[0];
    var n=A.shape[1];
    if(m!=n)
    {
    	return false;
    }
    var i,j,z,c,t;
    
    //making U and L matrix
    for (i = 0; i < n; i++) 
    {
        L.set(i, i, 1);			//setting diagnal of l 1
    }

    for(i=0;i<n;i++)
    {
    	for(j=0;j<n;j++)
    	{
    		U.set(i,j,A.get(i,j));			//copying a into u
    	}
    }

    for (i= 0; j < n-1; i++) 
    {
        for (var j = i; j < n-1; j++) 
        {
            c = U.get(j+1,i)/U.get(i,i);
            
            for (z = 0; z<n; z++) 
            {
           		U.set(i,z,U.get(i,z)*c);
           		t=U.get(j+1,i);
           		U.set(j+1,i,(U.get(j+1,i)-U.get(i,z)));	//setting u j+1,i position to zero
           		
           		if(t!=0&&U.get(j+1,i)==0)
           		{
           			L.set(j+1,i,c);						//filling l
           		}
           		
           		U.set(i,z,U.get(i,z)/c);


            }
            
        }
    }
    return true;

       
};
